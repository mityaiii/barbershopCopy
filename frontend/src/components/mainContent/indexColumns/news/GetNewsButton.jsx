import { Link } from "react-router-dom"
import Button from "src/components/UI/Button"
import { useLess } from "src/hooks/useLess"

const GetNewsButton = () => {
  const isSmallObject = useLess(580)

  return(
    isSmallObject ? 
    <div className='center'><Link className="button" to={'news-list'}>новости</Link></div> :
    <Link className="button" to={'/news-list'}>новости</Link>
  )
}

export default GetNewsButton;