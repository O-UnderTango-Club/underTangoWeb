(function () {
  emailjs.init("j4CBoG8o9GCBGIZvr");
})();

const firebaseConfig = {
  apiKey: "AIzaSyC05s84tQfQbiJua0G0LHnQsZP76HqxMk4",
  authDomain: "undertango.firebaseapp.com",
  projectId: "undertango",
  storageBucket: "undertango.appspot.com",
  messagingSenderId: "21199358960",
  appId: "1:21199358960:web:6b751db7c333403057ab35",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const buttons = document.querySelectorAll(".select-button");
const hiddenInput = document.getElementById("show-type");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    hiddenInput.value = button.getAttribute("data-value");
  });
});

const commentsTextarea = document.getElementById("comments");
const charCount = document.getElementById("char-count");

commentsTextarea.addEventListener("input", function () {
  const remaining = 300 - this.value.length;
  charCount.textContent = `${this.value.length}/300 caracteres`;
});

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const showType = hiddenInput.value; // Obtener el valor del input hidden
  const comments = document.getElementById("comments").value;

  if (!showType) {
    alert("Por favor, selecciona un tipo de espectáculo.");
    return;
  }

  console.log("Datos del cliente:", {
    name,
    email,
    date,
    showType,
    comments,
  });

  const sendEmail = (templateId, params) => {
    return emailjs.send("undertango", templateId, params);
  };

  db.collection("showBookings")
    .add({
      name: name,
      email: email,
      date: date,
      showType: showType,
      comments: comments,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((docRef) => {
      console.log("Reserva registrada con ID: ", docRef.id);

      const clientEmailPromise = sendEmail("clienttemplateid", {
        to_name: name,
        email: email,
        from_name: "UnderTango Club",
        from_email: "undertangoclub@gmail.com",
        show_type: showType,
        date: date,
        comments: comments,
        message: `Gracias por su interés en nuestro espectáculo de ${showType}. Procesaremos su solicitud lo antes posible. Comentarios recibidos: ${comments}`,
      });

      const teamEmailPromise = sendEmail("teamtemplateid", {
        to_name: "Equipo UnderTango",
        from_name: name,
        from_email: "undertangoclub@gmail.com",
        show_type: showType,
        date: date,
        email: email,
        comments: comments,
        message: `Nueva reserva recibida para ${showType} el día ${date}. Comentarios del cliente: ${comments}`,
      });

      return Promise.all([clientEmailPromise, teamEmailPromise]);
    })
    .then((responses) => {
      console.log("Correos enviados exitosamente", responses);
      document.getElementById("message").innerHTML =
        "¡Solicitud de reserva enviada con éxito! Por favor, revise su correo electrónico para más detalles.";
      document.getElementById("message").className = "success";
      document.getElementById("bookingForm").reset();
      buttons.forEach((btn) => btn.classList.remove("active"));
      hiddenInput.value = "";
      charCount.textContent = "0/300 caracteres";
    })
    .catch((error) => {
      console.error("Error en el proceso de reserva:", error);
      document.getElementById("message").innerHTML =
        "Error al procesar la solicitud. Por favor, intenta de nuevo.";
      document.getElementById("message").className = "error";
    });
});