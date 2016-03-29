module.exports = function(bot){
  bot.hear(/javascript/i, function(msg){
     msg.send("TST rocks!")
  });

  bot.hear(/Goodbye/i, function(msg){
    msg.send("I'll see you next time,")
    var names = ["Cindy", "Jenny", "Jesse", "John", "Zuri", "Loren", "Mathhew", "Aaron", "Chip", "Che", "Jon", "Julia", "Kaylin", "MBII", "Megan", "Ntalie", "Salomone", "Shanaz"]
    for (var i = 0; len = a.length; i < len; i++){
      msg.send(i);
    }
  });

}

// Say Goodbye to cohorts
// (Goodbye) - say Goodbye to your cohorts


// module.exports = function(bot){
//  bot.hear(/Goodbye/i, function(msg){
///    msg.send("I'll see you next time.")
// })

// }
