document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;
    const addParticipantBtn = document.getElementById("add");
    const participantsFieldset = document.querySelector(".participants");
    const form = document.querySelector("form");
    const summary = document.getElementById("summary");

    // Add Participant Functionality
    addParticipantBtn.addEventListener("click", () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addParticipantBtn.insertAdjacentHTML("beforebegin", newParticipantHTML);
    });

    function participantTemplate(count) {
        return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname${count}"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname${count}" required />
            </div>
            <div class="item activities">
              <label for="activity${count}">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity${count}" />
            </div>
            <div class="item">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee${count}" required />
            </div>
            <div class="item">
              <label for="date${count}">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date${count}" required />
            </div>
            <div class="item">
              <p>Grade</p>
              <select name="grade${count}">
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
        </section>`;
    }

    // Submit Form Functionality
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        const total = totalFees();
        const adultName = document.getElementById("adult_name").value;
        const participantCount = document.querySelectorAll("[id^=fname]").length;

        form.style.display = "none"; // Hide form
        summary.innerHTML = successTemplate(adultName, participantCount, total);
        summary.style.display = "block"; // Show summary message
    });

    function totalFees() {
        let feeElements = [...document.querySelectorAll("[id^=fee]")];
        return feeElements.reduce((sum, input) => sum + Number(input.value || 0), 0);
    }

    function successTemplate(name, count, total) {
        return `<p>Thank you <strong>${name}</strong> for registering. You have registered <strong>${count}</strong> participants and owe <strong>$${total}</strong> in fees.</p>`;
    }
});