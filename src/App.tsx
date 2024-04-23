import './App.css'

export default function App() {

  return (
    <main className='container'>
      {/* orange outer iframe */}
      <iframe className="outer" src="https://transak-double-iframe-supporter.vercel.app/"
        allow="camera;microphone;payment"
      />
    </main>
  )
}