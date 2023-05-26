import './App.css'
import SubTitle from './components/SubTitle/SubTitle'
import Title from './components/Title/Title'
import Image from './components/Image/Image'
import Paragraph from './components/Paragraph/Paragraph'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const imgParams = {
  src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  alt: 'beautiful mountain view',
  with: '150px',
  height: '150px'
}

function App() {
  return (
    <>
      <Header>
        <Title title={'Mountain Pics'} />
      </Header>

      <Main>
        <SubTitle subTitle={'Beautiful Mountain 1'} />
        <Image imgParams={imgParams} />
        <Paragraph text={'Beautiful Mountain 1'} />

        <SubTitle subTitle={'Beautiful Mountain 2'} />
        <Image imgParams={imgParams} />
        <Paragraph text={'Beautiful Mountain 2'} />
      </Main>

      <Footer>
        <Paragraph text={'😊 © 2023'} />
      </Footer>
    </>
  )
}
export default App
