const calculateFormEl = document.getElementById("calculateForm");
const calculateMarks = (event) => {
    const maxMarks = 400;

    event.preventDefault();


    const formData = new FormData(calculateFormEl);
    const data = {};
    formData.forEach((value,key) => {
        data[key] = +value;
    })

    const totalMarks = data.maths + data.english + data.hindi + data.science;
    const percentage = (totalMarks / maxMarks) * 100;

    const resultEl = document.createElement("p");
    resultEl.innerText = `You Have Got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage} %`;
    resultEl.className = "result";

    calculateFormEl.after(resultEl);
}


