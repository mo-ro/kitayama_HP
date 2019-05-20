import GlobalLayout from "../components/Layouts/GlobalLayout";
import Icon from '../components/elements/Icon';
import Heading from '../components/elements/Heading';

const Index = () => (
  <GlobalLayout>
    <Icon icon="twitter" color="black" href="/about" />
    <Icon icon="twitter" color="red" size="small" />
    <Icon icon="twitter" size="large" color="blue" />
    <Heading level="2">aaaa</Heading>
  </GlobalLayout>
)


export default Index