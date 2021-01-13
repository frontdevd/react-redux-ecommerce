import ContentLoader from 'react-content-loader'

export const LoadingBlock = () => {
    return (
        <ContentLoader
            speed={0}
            width={320}
            height={457}
            viewBox="0 0 280 457"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="120" cy="120" r="120"/>
            <rect x="0" y="300" rx="6" ry="3" width="267" height="24"/>
            <rect x="0" y="333" rx="6" ry="3" width="267" height="71"/>
            <rect x="0" y="415" rx="6" ry="0" width="106" height="31"/>
            <rect x="134" y="412" rx="6" ry="6" width="135" height="38"/>
        </ContentLoader>
    )
}

export default LoadingBlock