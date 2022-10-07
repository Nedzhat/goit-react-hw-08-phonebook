import { ProgressBar } from  'react-loader-spinner'
import { LoaderWrapper } from './Loader.styled'

export const Loader = props => {
   return <LoaderWrapper>
      <ProgressBar
         height="80"
         width="80"
         ariaLabel="progress-bar-loading"
         wrapperStyle={{}}
         wrapperClass="progress-bar-wrapper"
         borderColor='#00B5D8'
         barColor='#00B5D8'
      />
   </LoaderWrapper>
};