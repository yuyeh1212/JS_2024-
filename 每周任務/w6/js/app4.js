const form = document.getElementById("multiStepForm");
const steps = Array.from(form.querySelectorAll(".step"));
let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

form.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-next")) {
    const inputs = steps[currentStep].querySelectorAll("input");
    let valid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        input.reportValidity();
        valid = false;
      }
    });

    if (valid && currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  }

  if (e.target.hasAttribute("data-prev")) {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  }

  if (e.target.hasAttribute("data-submit")) {
    const inputs = steps[currentStep].querySelectorAll("input");
    let valid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        input.reportValidity();
        valid = false;
      }
    });

    if (valid) {
      console.log("表單已提交");
      console.log(
        "表單資料:",
        Array.from(form.elements)
          .filter((el) => el.tagName === "INPUT")
          .map((el) => ({ name: el.placeholder, value: el.value }))
      );
    }
  }
});

showStep(currentStep);
