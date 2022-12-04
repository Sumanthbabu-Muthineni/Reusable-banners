import './index.css'

const Banner = props => {
  const {BannerCardItem} = props
  const {headerText, description, className} = BannerCardItem

  return (
    <li className={className}>
      <h1 className="head">{headerText}</h1>
      <p className="para">{description}</p>
      <div>
        <button className="showMore-btn">Show More</button>
      </div>
    </li>
  )
}
export default Banner
