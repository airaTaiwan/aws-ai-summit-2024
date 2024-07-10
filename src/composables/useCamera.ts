import * as faceapi from 'face-api.js'
import { loadImage } from '~/utils'

export function useCamera() {
  const isPersonOnCamera = ref(false)
  const personData = ref('')

  const currentCamera = ref<string>()
  const { videoInputs: cameras } = useDevicesList({
    onUpdated() {
      if (!cameras.value.find(i => i.deviceId === currentCamera.value))
        currentCamera.value = cameras.value[0]?.deviceId
    },
    requestPermissions: true,
  })

  const videoEl = shallowRef<HTMLVideoElement | null>(null)
  const { enabled, stream } = useUserMedia({
    constraints: { video: { deviceId: currentCamera.value } },
  })

  async function detectFaceAndGetHeadBox(img: HTMLImageElement): Promise<boolean> {
    const detection = await faceapi.detectSingleFace(
      img,
      new faceapi.TinyFaceDetectorOptions({ scoreThreshold: 0.5 }),
    )

    return new Promise((resolve) => {
      let box = null
      if (detection) {
        const rangeRatio = 2
        let headWidthToHunt = (detection.box.width < detection.box.height ? detection.box.width : detection.box.height) * rangeRatio
        let headX = detection.box.x - detection.box.width / 2
        let headY = detection.box.y - detection.box.height / 1.2
        if (headX < 0)
          headX = 0
        if (headY < 0)
          headY = 0
        while (headWidthToHunt + headX > img.width || headWidthToHunt + headY > img.height)
          headWidthToHunt -= 1

        box = {
          x: headX,
          y: headY,
          width: headWidthToHunt,
          height: headWidthToHunt,
        }
      }

      if (box == null || (box.x <= 0 || box.y <= 0) || (box.width < 200 || box.height < 200))
        resolve(false)
      else resolve(true)
    })
  }

  async function checkFace() {
    if (videoEl.value) {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')!
      canvas.width = videoEl.value.videoWidth
      canvas.height = videoEl.value.videoHeight
      context.drawImage(videoEl.value, 0, 0, canvas.width, canvas.height)
      const dataURL = canvas.toDataURL('image/png')

      if (dataURL) {
        const img = await loadImage(dataURL)
        isPersonOnCamera.value = await detectFaceAndGetHeadBox(img)

        if (isPersonOnCamera.value)
          personData.value = dataURL
        else
          personData.value = ''

        return isPersonOnCamera.value
      }
    }
  }

  watchEffect(() => {
    if (videoEl.value)
      videoEl.value.srcObject = stream.value!
  })

  onBeforeMount(() => {
    faceapi.nets.tinyFaceDetector.loadFromUri('/models')
  })

  onMounted(() => {
    enabled.value = true
  })

  return {
    videoEl,
    stream,
    isPersonOnCamera,
    personData,
    checkFace,
  }
}
