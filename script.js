// REACT FOR DONT TOUCH THE BUTTON //


// MESSAGES THAT APPEAR //

function DontTouchTheButton() {
  const messages = [
    "Hey there! Nice to meet you :)", // 1 
    "What are you doing? Don't press the button!", // 2
    "I’m warning you!", // 3
    "Why are you still pressing?", // 4
    "Okay... now you’ve done it.", // 5
    "This is your last warning.", // 6
    "YOU MONSTER!",  // 7
    "I love cake.", // 8
    "Who doesn't love cake?", // 9
    "You know who loves cake?", // 10
    "Glados.", // 11
    "Glados LOVES cake.", // 12
    "You know who else loves cake?", // 13
    "The cake is a lie!", // 14
    "How can a cake lie?", // 15
    "You may be wondering what the point of this is?", // 16
    "I'll tell you in 3 clicks.", // 17
    "1", // 18
    "2", // 19
    "3", // 20
    "There is no point.", // 21
    "I'm just really enjoying watching you click that button.", // 22
    "Keep clicking...", // 23
    "The magic is coming...", // 24
    "Almost there...", // 25
    "Humans are so gullible.", // 26
    "Anyhow, I believe we are done here...", // 27
    "Enjoy your cake!", // 28
  ];

  // IMAGES TO GO WITH THE MESSAGES //
  const images = [
    "https://img.freepik.com/free-photo/water-drops-background_23-2148098971.jpg?semt=ais_hybrid&w=740&q=80", // 1
    "https://img.freepik.com/free-photo/water-drops-background_23-2148098971.jpg?semt=ais_hybrid&w=740&q=80", // 2 
    "https://leefiltersdirect.com/cdn/shop/files/LEE-132_Medium-Blue-Colour-Block_grande.jpg?v=1743505900", // 3
    "https://thehomeofinteriors.co.uk/wp-content/uploads/207_Deep-Space-Blue_NT_Swatch-LR_Little-Greene-Paint-e1574771996738.jpg", // 4
    "https://i.etsystatic.com/5617738/r/il/ca2dc9/2331918875/il_570xN.2331918875_ov5h.jpg", // 5
    "https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg?semt=ais_hybrid&w=740&q=80", // 6
    "https://cdn.hswstatic.com/gif/monster-animals-1-orig.jpg", // 7
    "https://htmlcolorcodes.com/assets/images/colors/dark-brown-color-solid-background-1920x1080.png", // 8 
    "https://htmlcolorcodes.com/assets/images/colors/dark-brown-color-solid-background-1920x1080.png", // 9 
    "https://htmlcolorcodes.com/assets/images/colors/dark-brown-color-solid-background-1920x1080.png", // 10
    "https://i.ytimg.com/vi/58oTEo8SoPk/maxresdefault.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcHsLvfLKi74J7nSXPVwzFPADBtqnSylXFA&s", // 12
    "https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg?semt=ais_hybrid&w=740&q=80", // 13
    "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/09/portal-the-cake-on-a-table-in-the-dakr.jpg", // 14
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgI_fw1fTSIIYDQGbKmG47-egdrZJy7lkYpw&s", // 15
    "https://uploads.dailydot.com/2024/04/confused-nick-young-.jpg?auto=compress&fm=pjpg", // 16
"https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg?semt=ais_hybrid&w=740&q=80", // 17
    "https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg?semt=ais_hybrid&w=740&q=80", // 18
    "https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg?semt=ais_hybrid&w=740&q=80", // 19
    "https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg?semt=ais_hybrid&w=740&q=80", // 20
    "https://miro.medium.com/v2/1*8cUcMBPSqdF9W_DzVvsZag.jpeg", // 21
    "https://images.emojiterra.com/google/android-12l/512px/1f979.png", // 22
    "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2015/08/mouse-mistakes.jpg", // 23
    "https://static.vecteezy.com/system/resources/thumbnails/051/279/440/small_2x/magical-sparkle-wand-animation-on-a-transparent-background-magic-stick-4k-video.jpg", // 24
    "https://media.istockphoto.com/id/667315292/photo/man-climbing-up-a-mountain.jpg?s=612x612&w=0&k=20&c=jsMx92ycivHtTqviY69w3n0LDTxRXGHHSJ1keb6qAZc=", // 25
    "https://media.tenor.com/jlsPtnbFvzEAAAAM/fireworks-firework.gif", // 26
    "https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/share/1f44b.jpg", // 27
    "https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg?semt=ais_hybrid&w=740&q=80", // 28
  ];

  const [index, setIndex] = React.useState(0);
  const [position, setPosition] = React.useState({ top: 100, left: 100 });

  const moveButton = () => {
    const maxWidth = window.innerWidth - 200;
    const maxHeight = window.innerHeight - 100;

    const newLeft = Math.floor(Math.random() * maxWidth);
    const newTop = Math.floor(Math.random() * maxHeight);

    setPosition({ top: newTop, left: newLeft });
  };

  const handleClick = () => {
    if (index < messages.length - 1) {
      setIndex((prev) => prev + 1);
      moveButton();
    } else {
      setIndex(messages.length);
    }
  };

  const is404 = index === messages.length;

 return (
  <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
    {/* H1 disappears at step 6 */}
    {index < 6 && (
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "white",
          fontFamily: "'Nosifer', cursive",
          textShadow: "2px 2px 8px black",
          marginTop: "20px",
          position: "relative",
          zIndex: 5,
        }}
      >
        Do Not Touch The Button.
      </h1>
    )}

    {/* Background image */}
    {index < images.length && !is404 && (
      <img
        src={images[index]}
        alt=""
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
          filter: "brightness(0.7)",
        }}
      />
    )}

    {/* Intro text - (only on first step) */}
    {index === 0 && (
      <p
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          marginTop: "20px",
          color: "white",
          fontFamily: "poppins",
          zIndex: 5,
          position: "relative",
          fontStyle: "italic",
        }}
      >
        Pretty simple instructions really, DO NOT press the button!!!
      </p>
    )}

    {/* The button */}
    {!is404 && (
      <button
        onClick={handleClick}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          padding: "20px 40px",
          fontSize: "1.2rem",
          transition: "top 0.2s ease, left 0.2s ease",
          zIndex: 10,
          fontFamily: "poppins",
        }}
      >
        <p>Don't Touch This Button...</p>
      </button>
    )}

    {/* Message box */}
    {!is404 && index < messages.length && (
      <div
        style={{
          marginTop: 30,
          padding: 20,
          border: "2px solid black",
          borderRadius: 10,
          maxWidth: 300,
          margin: "50px auto 0",
          backgroundColor: "red",
          fontWeight: "bold",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
          fontFamily: "sans-serif",
        }}
      >
        {messages[index]}
      </div>
    )}

    {/* 404 screen */}
    {is404 && (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#111",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          zIndex: 20,
          textAlign: "center",
          padding: 20,
        }}
      >
         <div className="error-screen">
        <div>404</div>
        <div style={{ fontSize: "1.5rem", marginTop: 20 }}>
          Page Not Found — I told you not to touch the button...
        </div>
        <img
          src="https://spillthebeans.ie/wp-content/uploads/2015/08/portalcake1.jpg"
          alt="Cake"
          style={{
            marginTop: 20,
            maxWidth: "300px",
            width: "80vw",
            borderRadius: "10px",
          }}
        />
      </div>
       </div>
    )}
  </div>
);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DontTouchTheButton />);
