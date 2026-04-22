const output = document.getElementById("output");
const input = document.getElementById("commandInput");

function print(text = "") {
  const div = document.createElement("div");
  div.className = "output-line";
  div.textContent = text;
  output.appendChild(div);
  window.scrollTo(0, document.body.scrollHeight);
}

/* Boot sequence */
print("BOOTING SYSTEM...");
print("USER: Simrandeep Singh");
print("ROLE: Hands-On Tech Explorer");
print("FOCUS: IoT • Linux • Android");
print("");
print("Type `help` to begin.");
print("");

const commands = {
  help() {
    print("Available commands:");
    print("about");
    print("skills");
    print("projects");
    print("links");
    print("clear");
  },

  about() {
    print("I build lab-style projects to learn by doing.");
    print("I like breaking things, fixing them, and documenting the process.");
  },

  skills() {
    print("SYSTEMS: Windows, Linux (Ubuntu/Debian)");
    print("SCRIPTING: Bash");
    print("IOT: ESP32, MQTT");
    print("ANDROID: ADB, Developer Options");
    print("TOOLS: Git, GitHub, VS Code");
  },

  projects() {
    print("1) IoT Smart Sensor Monitor");
    print("2) Linux Setup & Automation");
    print("3) Galaxy S9 Android Tooling Lab");
    print("Use `open 1`, `open 2`, or `open 3`");
  },

  open(arg) {
    if (arg === "1") {
      window.open("https://github.com/Simrandeep-Ghost/iot-sensor-monitor", "_blank");
    } else if (arg === "2") {
      window.open("https://github.com/Simrandeep-Ghost/linux-setup-automation", "_blank");
    } else if (arg === "3") {
      window.open("https://github.com/Simrandeep-Ghost/galaxy-s9-tooling-lab", "_blank");
    } else {
      print("Invalid project number.");
    }
  },

  links() {
    print("GitHub: https://github.com/Simrandeep-Ghost");
    print("LinkedIn: https://www.linkedin.com/in/your-handle/");
  },

  clear() {
    output.innerHTML = "";
  }
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = input.value.trim();
    print(`$ ${value}`);

    const [cmd, arg] = value.split(" ");
    if (commands[cmd]) {
      commands[cmd](arg);
    } else {
      print("Command not found.");
    }

    input.value = "";
  }
});
``
