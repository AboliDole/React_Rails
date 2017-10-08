# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
articles = Article.create([
  {
      title: "Brazil opens vast Amazon reserve to mining",
      description: "Brazil's government has abolished a vast national reserve in the Amazon to open up the area to mining.
      The area, covering 46,000 sq km (17,800 sq miles), straddles the northern states of Amapa and Para, and is thought to be rich in gold, and other minerals.
      The government said nine conservation and indigenous land areas within it would continue to be legally protected.
      But activists have voiced concern that these areas could be badly compromised.
      A decree from President Michel Temer abolished a protected area known as the National Reserve of Copper and Associates (Renca).
      Its size is larger than Denmark and about 30% of it will be open to mining.
      The mining and energy ministry says protected forest areas and indigenous reserves will not be affected.
      ""The objective of the measure is to attract new investments, generating wealth for the country and employment and income for society, always based on the precepts of sustainability,"" the ministry said in a statement.",
      author: "BBC",
      tags:"Brazil, amazon",
      article_date: Date.today + rand(3).months
    },
    {
      title: "Google will ask: 'Are you depressed?'",
      description:"People searching for 'depression' on Google will soon be prompted to take a questionnaire to assess if they may be suffering from the illness.
      The search giant has partnered with the US National Alliance on Mental Illness (Nami) to roll out the project which is currently only for US users.
      Users searching for depression will be prompted to “check if you’re clinically depressed”.
      'While this tool can help, it’s important to note that PHQ-9 is not meant to act as a singular tool for diagnosis,' Nami said.
      In a blog post announcing the news, Nami said the test should not be seen as replacing the insight of qualified mental health professionals - was instead a method to help people get the right help more quickly.
      'By tapping “Check if you’re clinically depressed,” you can take this private self-assessment to help determine your level of depression and the need for an in-person evaluation,' the organisation explained.
      'The results of the PHQ-9 can help you have a more informed conversation with your doctor.'
      'Trouble concentrating?'
      The question will appear in the Knowledge Panel - the box that appears at the top of results when users search on a mobile device. Typically this panel is used for factual information, including details drawn from Wikipedia entries.
      The Patient Health Questionnaire-9 is a series of nine questions about the subject’s mental health.
      It asks how often you feel you have 'little interest or pleasure in doing things' or 'trouble concentrating on things, such as reading the newspaper or watching television?'.
      Various studies have concluded it is a concise, reliable way to accurately detect signs of clinical depression.
      Speaking to the Financial Times, Google product manager Vidushi Tekriwal said users who fill out the test will not have their answers logged by the company, nor would advertising be targeted to them as a result.
      However, one psychotherapist said the idea seemed 'terribly redundant'.
      Someone googling depression will probably not find more useful information via a short diagnostic than they have already surfaced in search results, argued Dr Aaron Balick, author of 'The Psychodynamics of Social Netowrking'.
      'A better approach would be some sort of acknowledgment that the searcher may be feeling down, and offering them resources and a direct line - perhaps a chat box - to local psychological services,' he told the BBC.
      ",
      author:"Dave Lee",
      tags:"Google, depression",
      article_date: Date.today + rand(3).months

    },
    {
      title: "Wayne Rooney international retirement: How will history judge his England career?",
      description:"Wayne Rooney's retirement from international duty - announced after England's all-time record goalscorer had been told he had won a recall at 31 - closes another chapter in his illustrious story.
      Rooney, with 53 England goals in 119 appearances, left Manchester United to return to Everton this summer with his place in Old Trafford's history books also assured after he overtook Sir Bobby Charlton's club record with 253 goals.
      He had been sidelined by Jose Mourinho at United, and also by Southgate with England, but such has been his early rejuvenation at Goodison Park that he was offered a place back in the fold for the forthcoming World Cup qualifiers against Malta and Slovakia.
      Rooney, who originally planned to end his England career after next summer's World Cup in Russia, decided against a return and will now focus fully on Everton.
      So how will history judge Wayne Rooney's England career?",
      author:"BBC Sport",
      tags:"US Open, Tennis",
      article_date: Date.today + rand(3).months
    },
    {
      title: "US Open: Milos Raonic withdraws because of wrist injury",
      description:"World number 11 Milos Raonic is the latest high-profile player to pull out of the US Open, which starts on Monday.
      Canadian Raonic, 26, has withdrawn because of a persistent wrist injury but said that he planned to return to action before the end of 2017.
      Defending champion Stan Wawrinka is unable to defend his singles title at Flushing Meadows because of a knee injury.
      Novak Djokovic (elbow) and Victoria Azarenka will also be absent.
      Belarusian Azarenka, 28, is missing the final Grand Slam of the year because of an ongoing family situation.
      World number 10 Kei Nishikori is also out after tearing a tendon in his right wrist.
      Raonic said he was unable give full effort as a result of his injury.
      I have too much respect for the US Open and my fellow competitors to take a spot in the draw when I know I cannot give full effort due to this injury,he said." ,

      author:"BBB Sports",
      tags:"US Open, Tennis",
      article_date: Date.today + rand(3).months
    },
    {
      title: "Billionaires and big ag are joining venture investors to fund lab-grown meat",
      description:"Eighty-five years ago, Winston Churchill wrote an article for Popular Mechanics that predicted humans would soon be growing their meat rather than cultivating animals for it.
      Now, with $17 million in fresh financing from a slew of new investors, including the billionaires Bill Gates and Richard Branson, the big agriculture company Cargill and the venture capital firm DFJ, Memphis Meats is hoping to create an entirely new industry around what it calls clean meat.
      Instead of using animals as pieces of technology to convert plants into proteins to make things that we like to eat, drink and wear, we can just use biology to make those things directly, said Seth Bannon, a co-founder of the upstart venture firm Fifty Years and an early investor in Memphis Meats.
      The company has already successfully made synthesized beef, chicken and duck, according to Memphis Meats co-founder and chief executive Uma Valeti. Now the trick is to get the company to grow their meat at scale.
      We envision this to be a production facility where people can walk through and see where the meat is growing, where it is being harvested and where it is being cooked. You don’t get to visit feed lots or visit slaughterhouses, Valeti tells me.
      Valeti imagines a production facility that looks more like a craft brewery than a slaughterhouse. It also would represent the first major innovation in the meat industry in the 10,000 years since humans first began breeding livestock.
      In a 2002 article for The New York Times Magazine, journalist Michael Pollan described how cows are slaughtered. 
      The cows are funneled into a chute single-file. Once there, they are walked over a metal bar, and, as the floor declines, the cows are suspended over a false floor on the bar and then taken on a conveyor belt to pass in front of a slaughterhouse employee called a “stunner.”
      The stunner’s job is to shoot a seven-inch steel bolt, roughly the width of a pencil, between the eyes of the drugged and incapacitated cow.
      Then the dead animal is moved from the conveyor belt to a trolley overhead and carried to the bleeding area, where its throat is cut. Roughly 392 cows are slaughtered per hour at a typical slaughterhouse (like the one in Kansas that Pollan described).
      This is the culmination of human achievement in meat processing so far (don’t even get me started on chickens)." ,

      author:"TechCrunch",
      tags:"Billionaires, Ventures",
      article_date: Date.today + rand(3).months
    },
    {
      title: "Thanks to Amazon, Seattle is now America’s biggest company town",
      description:"Amazon’s extraordinary growth has turned Seattle into the biggest company town in America.
      Amazon now occupies a mind-boggling 19 percent of all prime office space in the city, the most for any employer in a major U.S. city, according to a new analysis conducted for The Seattle Times.
      Amazon’s footprint in Seattle is more than twice as large as any other company in any other big U.S. city, and the e-commerce giant’s expansion here is just getting started.
      The swarms of 20-somethings crowding into South Lake Union every morning represent an urban campus that is unparalleled in the United States — and they have helped transform Seattle, for better or worse. Amazon’s rapid rise has fueled an economy that has driven up wages and lowered unemployment, but also produced gridlock on the roads and sky-high housing prices.
      And while Seattle’s booming economy is often attributed to a wide variety of factors, increasingly, it’s all about one company.
      Amazon now occupies more office space than the next 40 biggest employers in the city combined.
      And that’s only the beginning: Amazon’s Seattle footprint of 8.1 million square feet is expected to soar to more than 12 million square feet within five years." ,
      author:"Amazon",
      tags:"Amazon, Seattle",
      article_date: Date.today + rand(3).months
    }
    ])
