import { ThreeDots } from 'react-loader-spinner'
import { CLASSES, COLORS } from '../../assets/styles/styles'

export default function FullPageLoader({ opacity = 0.8, isFallback = false }) {
  return (
    <div
      className={CLASSES.content_center + 'w-100 h-100'}
      style={{
        zIndex: 999,
        position: isFallback ? 'relative' : 'fixed',
        backgroundColor: isFallback ? 'white' : `rgba(0,0,0,${opacity})`,
      }}
    >
      <ThreeDots
        visible={true}
        height='15'
        width='80'
        color={isFallback ? COLORS.theme : COLORS.white}
        radius='9'
        ariaLabel='three-dots-loading'
        wrapperStyle={{}}
        wrapperClass={CLASSES.content_center + 'my-5'}
      />
    </div>
  )
}
