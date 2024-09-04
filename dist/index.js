"use strict";
var Status;
(function (Status) {
    Status["ACTIVE"] = "Active";
    Status["CANCELLED"] = "Cancelled";
})(Status || (Status = {}));
var Specialty;
(function (Specialty) {
    Specialty["CARDIOLOGY"] = "Cardiolog\u00EDa";
    Specialty["TRAUMATHOLOGY"] = "Traumatolog\u00EDa";
    Specialty["OPHTALMOLOGY"] = "Oftalmolog\u00EDa";
    Specialty["ORTHOPEDICS"] = "Ortopedia";
    Specialty["DERMATHOLOGY"] = "Dermatolog\u00EDa";
})(Specialty || (Specialty = {}));
var TraumaExams;
(function (TraumaExams) {
    TraumaExams["XRAY"] = "Xray";
    TraumaExams["CT"] = "Tomograf\u00EDa computarizada";
    TraumaExams["MRI"] = "Resonancia magn\u00E9tica";
    TraumaExams["ULTRASOUND"] = "Ultrasonido";
    TraumaExams["BONESCAN"] = "Esc\u00E1ner \u00F3seo";
})(TraumaExams || (TraumaExams = {}));
var CardiologyExams;
(function (CardiologyExams) {
    CardiologyExams["ELECTRO"] = "Electrocardiograma";
    CardiologyExams["ECO"] = "Ecocardiograma";
    CardiologyExams["HOLTER"] = "Holter";
    CardiologyExams["STRESSTEST"] = "Prueba de esfuerzo";
    CardiologyExams["CATHETERIZATION"] = "Cateterizaci\u00F3n cardiaca";
})(CardiologyExams || (CardiologyExams = {}));
const shift1 = {
    date: new Date(),
    description: "Cita con el traumatólogo para evaluar rotura de mano.",
    status: Status.ACTIVE,
    duration: 60,
    specialty: Specialty.TRAUMATHOLOGY,
    exam: [TraumaExams.XRAY],
};
const shift2 = {
    date: new Date(),
    description: "Cita con el cardiólogo para evaluar latidos irregulares.",
    status: Status.ACTIVE,
    duration: 60,
    specialty: Specialty.CARDIOLOGY,
    exam: [CardiologyExams.ELECTRO]
};
const patient1 = {
    name: "Bruno",
    username: "BrunoChG",
    password: "123456",
    shifts: [shift1, shift2],
    picture: "link of a picture",
    email: "bruno@mail.com"
};
const sendReminder = (patient, shift) => {
    if (shift.status === Status.ACTIVE)
        console.log(`${patient.name}, tienes una cita programada en ${shift.specialty} en la Clínica Ricardo Palma con fecha y hora ${shift.date}.`);
};
sendReminder(patient1, shift1);
