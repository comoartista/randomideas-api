const express = require("express");
const port = 3000;

const app = express();

const ideas = [
  {
    id: 1,
    text: "Positive NewsLetter, a newsletter that only shares positive, uplifting news",
    tag: "Technology",
    username: "TonyStark",
    date: "2024-05-03",
  },
  {
    id: 2,
    text: "EcoSnap, an app that identifies plants and animals and tracks biodiversity in your area",
    tag: "Environment",
    username: "JaneGoodall",
    date: "2024-05-10",
  },
  {
    id: 3,
    text: "MindfulMe, a meditation app that sends gentle reminders for mental breaks",
    tag: "Health",
    username: "ZenMaster",
    date: "2024-05-15",
  },
  {
    id: 4,
    text: "RecipeSwap, a community-driven recipe platform where users share and vote on recipes",
    tag: "Food",
    username: "ChefAlex",
    date: "2024-05-20",
  },
  {
    id: 5,
    text: "PetConnect, an app that helps find homes for stray animals in local communities",
    tag: "Animal Welfare",
    username: "PetLover",
    date: "2024-05-22",
  },
  {
    id: 6,
    text: "SkillShare Local, an online platform for exchanging skills with people in your neighborhood",
    tag: "Community",
    username: "SkillfulSam",
    date: "2024-05-30",
  },
  {
    id: 7,
    text: "CleanStream, a smart filter device that tracks and cleans local waterways",
    tag: "Environment",
    username: "EcoWarrior",
    date: "2024-06-01",
  },
  {
    id: 8,
    text: "WellnessBot, a chatbot that offers self-care tips and tracks daily mood patterns",
    tag: "Health",
    username: "MindfulBot",
    date: "2024-06-10",
  },
  {
    id: 9,
    text: "EduBytes, an app that delivers bite-sized learning in various fields daily",
    tag: "Education",
    username: "TeachGuru",
    date: "2024-06-12",
  },
  {
    id: 10,
    text: "HistoryGo, an app that uses AR to showcase historical events at real-life locations",
    tag: "History",
    username: "HistoryBuff",
    date: "2024-06-18",
  },
];

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the RandomIdeas API" });
});

//Get all ideas
app.get("/api/ideas/", (req, res) => {
  res.json({ success: true, data: ideas });
});

app.get("/api/ideas/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resourse not found" });
  }
  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
