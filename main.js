import './style.css'

let allWords = [
  "the",
  "of",
  "and",
  "to",
  "in",
  "is",
  "be",
  "that",
  "was",
  "he",
  "for",
  "it",
  "with",
  "as",
  "his",
  "on",
  "have",
  "at",
  "by",
  "not",
  "they",
  "this",
  "had",
  "are",
  "but",
  "from",
  "or",
  "which",
  "one",
  "you",
  "would",
  "all",
  "will",
  "there",
  "when",
  "up",
  "what",
  "out",
  "about",
  "who",
  "get",
  "if",
  "can",
  "my",
  "would",
  "her",
  "say",
  "an",
  "we",
  "home",
  "like",
  "other",
  "how",
  "then",
  "them",
  "these",
  "so",
  "some",
  "her",
  "make",
  "him",
  "into",
  "time",
  "has",
  "look",
  "two",
  "more",
  "write",
  "go",
  "see",
  "number",
  "way",
  "could",
  "people",
  "than"
]

let testWords = allWords.sort(() => 0.5 - Math.random())
let testElement = document.querySelector("#testtext")
let testString = testWords.join(' ')
testElement.innerHTML = testString
testElement.onclick = () => { testInput.focus() }
let testStarted = false
let testInput = document.getElementById("testinput")
let countdown = document.getElementById("countdown")
let userString = ''
let scoreModal = document.getElementById("score")

function startTest () {
  testStarted = true
  testElement.style.filter = "none"
  countdown.innerHTML = "00:15"
  testInput.focus()
  testInput.value = ""
  testInput.addEventListener('input', inputChanged)
}

function inputChanged (e) {
  if (e.target.value.charAt(0) == e.target.value) {
    startTimer()
  }
  userString = e.target.value
}

function startTimer() {
  let secondsleft = 14
  let timer = setInterval(() => {
    secondsleft -= 1
    countdown.innerHTML = "00:" + (secondsleft < 9 ? "0" : "") + (secondsleft + 1)
    if (secondsleft == 0) {
      clearInterval(timer)
      stopTest()
    }
  }, 1000)
}

function stopTest () {
  testInput.readOnly = true
  let userWords = userString.split(' ')
  let count = 0
  userWords.forEach((word, index) => {
    if (word == allWords[index]) {
      count++
    }
  });
  let wpm = count * 4
  let wps = (wpm/60).toFixed(2)
  let cps = (userString.length/60).toFixed(2)
  showScore(wpm, wps, cps)
}

function showScore(wpm, wps, cps) {
  document.getElementById("wpmdisplay").innerHTML = wpm
  document.getElementById("wpsdisplay").innerHTML = `<span class="green">${wps}</span> word${wps > 1 ? "s" : ""} per second`
  document.getElementById("cpsdisplay").innerHTML = `<span class="green">${cps}</span> character${wps > 1 ? "s" : ""} per second`
  scoreModal.showModal()
}

document.getElementById("startbtn").onclick = startTest