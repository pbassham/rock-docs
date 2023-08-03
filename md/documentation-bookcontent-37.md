# 
from:documentation-bookcontent-37.html

#### Updates for McKinley 15.0

No updates made.

#### Updates for McKinley 9.0

No updates made.

#### Updates for McKinley 10.0

Below is a summary of the updates for this version.

*   Added Assessments to History in Person Profile

#### Updates for McKinley 11.0

No updates made.

#### Updates for McKinley 12.0

No updates made.

#### Updates for McKinley 13.0

No updates made.

#### Updates for McKinley 14.0

No updates made.

[](#assessments)Assessments
===========================

We are all uniquely wired and given specific gifts, abilities, ways of thinking, and ways of solving problems. In Rock we have implemented five assessments to empower your organization to understand your people more. The results that come from these assessments can greatly help your workers better understand their strengths, calling and fill needs based on your greater understanding of your organization’s members.

By gathering assessment data on the people in your organization, both internal staff and other participants, your organization can understand how individuals can fit into the best roles for their unique blend of strengths. Additionally, you can use the assessment information in order to help guide your people with a fresh understanding. You can find out the best ways to motivate and communicate with them to challenge them to greater engagement in the body. You can use data views to filter people based on the results of any assessment in Rock in order to gather them and generate reports on their assessment responses.

Here’s a list of all the available assessments: later we will break each one down individually.

*   DISC
*   Spiritual Gifts
*   Emotional Intelligence
*   Conflict Profile
*   Motivators

[](#sendingrequests)Sending Requests
====================================

Before we get into each assessment one by one, let’s take a look at how requests are sent to groups or individuals. Out of the box, Rock comes with these assessments ready to go, so you don’t have to do any background work.

[](#individualrequests)Individual Requests
==========================================

One way to send a request is through a person’s profile page. This is done by clicking the Actions button located below the person's photo. Click on the button and choose _Request Assessment_.

Send Request

![Send Request](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/send-individual-request-v14.png)

A page will then show all five assessments to choose and add a message to send with the request. You can select one assessment or multiple.

Assessments

![Choose](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/choose-assessments-to-send-v13.png)

[](#grouprequests)Group Requests
================================

Alternatively, you can use the [Lava](https://community.rockrms.com/lava/) codes below in any communication to send to large groups of people at the same time. See our [Communicating With Rock](https://community.rockrms.com/documentation/bookcontent/8/) guide for more information on creating and sending communications.

`               {{ 'Global' | Attribute:'PublicApplicationRoot' }}/DISC/{{ Person.UrlEncodedKey }}           `

`              {{ 'Global' | Attribute:'PublicApplicationRoot' }}/SpiritualGifts/{{ Person.UrlEncodedKey }}          `

`              {{ 'Global' | Attribute:'PublicApplicationRoot' }}/EQ/{{ Person.UrlEncodedKey }}          `

`              {{ 'Global' | Attribute:'PublicApplicationRoot' }}/Motivators/{{ Person.UrlEncodedKey }}          `

`              {{ 'Global' | Attribute:'PublicApplicationRoot' }}/ConflictProfile/{{ Person.UrlEncodedKey }}          `

Once the request has been sent, the person will receive the email with an external link to start the assessment. They can also access the request and other assessments on their _My Account_ page on the external website.

Email

![Email](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/assessment_email_v9.png)

[](#assessmenthistory)Assessment History
========================================

A history of assessments can be viewed from an individual's _Person Profile_ page under the _History_ tab. This history includes assessments that were taken with or without a formal request.

Person Profile - Assessment History

![Person Profile Assessment History](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/person-profile-assessment-history-v14.png)

1 Assessment

The name of the assessment is displayed here. The same assessment will appear in the list more than once if multiple requests exist.

2 Status

The status column will display either "Pending" or "Complete" to let you know if the person took the assessment.

3 Requested

The date and time of the requests are displayed here for reference. This column will be empty if the person took the assessment on their own, without a corresponding request.

4 Requested By

The person who sent the request is displayed here for reference. This column will be empty if the person took the assessment without a request.

5 Completed

The date and time when the person finished the assessment are displayed here for reference. Nothing will be displayed here if the person hasn't Completed the assessment.

6 Delete/Cancel

A request can be deleted only if the person hasn't already Completed the assessment.

[](#takingassessments)Taking Assessments
========================================

The assessments are all taken in a similar way; however, each assessment will vary on the questions and type of answers provided. These are not configurable. The assessments were heavily researched and designed to meet a huge audience.

It’s essential to keep a few things in mind while taking these assessments. One is to reflect on who you are at the time of taking the assessment. It is tempting to answer questions based on who you aspire to be someday. It is best to take a present approach to these questions. Another thing to keep in mind is your environment. It’s possible you have two very different responses from how you would answer if you were home vs. at work. Throughout the whole assessment, we encourage you to choose the same environment for each question.

At the beginning of each chapter, we are going to start with a breakdown on how each assessment is structured. Let’s get started.

[](#discpersonalityassessment)DISC Personality Assessment
=========================================================

The DISC assessment is like many other quadrant-style personality profiles. You may have seen some that divide all personalities into four types or combinations of those types. Some tests show results as colors or animals. DISC takes that same concept but uses letters to stand for each personality type.

Here's a quick look at the four main types and some adjectives that describe them:

*   D: dominant, driving, determined, decisive
*   I: inspirational, impressive, influencing, impulsive
*   S: steady, stable, specialized
*   C: cautious, competent, consistent, conscientious

Rock's DISC test delivers 16 different results that take into account letter types and combinations of any two or one. We'll talk more about what each of these means in detail later in this chapter.

[](#takingdisc)Taking DISC
==========================

The DISC assessment has four statements. Out of the four, you will choose which one you are least like and which one you are most like.

Taking DISC

![Taking DISC](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/taking-DISC-v13.png)

At the completion of the assessment, you will be presented with a bar graph showing your personality type with a few details underneath. Check out the [Catalog of Types](#catalogoftypes) section below for greater details on the results of DISC.

DISC Results

![DISC Results](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/DISC-results-v13.png)

[](#organizationalbenefits)Organizational Benefits
==================================================

The actual DISC instrument algorithm provides for millions of combinations and allows for the many nuances of human behavior. For the sake of Rock, we have simplified the reporting to allow for four levels within each of the four scales (DISC). Because there are only four types (and their combinations), DISC results are therefore easy to remember and simple to apply in the context of a team or structured messaging. While some assessments have a greater number of results and more complex typing patterns, the goal of Rock is to simplify. Instead of delivering long, complicated and highly individualized results, Rock's DISC assessment was created to support the application's focus on groups, group management, and customizable group experiences.

Not only that, but the DISC profiling tool has major implications for screening potential staff, encouraging emotional intelligence, developing strong interpersonal relationships, predicting leadership behaviors and solving problems.

Once you get started, you'll see how easy it is to understand individuals in a new light, remember their profile results and apply that knowledge for results.

[](#catalogoftypes)Catalog of Types
===================================

| D | Detail |
| --- | --- |
| Description | You enjoy accomplishing the end goal and are willing to do whatever it takes to accomplish the task. You may hurt people in accomplishing the goal, but you feel the goal is more important. |
| Strengths | As naturally powerful, confident leaders, D's take the initiative to pursue goals at all costs. They are undaunted by obstacles or high-risk situations. Highly efficient and purposeful, D's dream big and set records. Other personality types generally admire D's for their dynamic courage, boldness and laser vision. |
| Challenges | D's are high achievers who can be insensitive, impatient, impulsive and egotistical. Immature D's are short on self-control and self-discipline, leading to conflicts with authority. To mature, D's need to learn to balance their aggressive determination by developing listening skills and avoiding unnecessary arguments. |
| Under Pressure | D's are forceful and overly direct. |
| Motivation | Results, challenge, action |
| Team Contribution | They contribute to a team by creating opportunities and taking initiative. |
| Leadership Style | D's are visionaries who are interested in the bottom line. They challenge perceptions and value efficiency, innovation and achievement. D's are leaders who have what it takes to move a team forward. |
| Follower Style | While D's may not be naturally great team players, they excel at overcoming obstacles that would discourage other personality types. They are committed, independent workers who need variety and space to find answers and get the job done. D's often attempt to do too much at once and need to understand the priority of a job from the start. |

| DI | Detail |
| --- | --- |
| Description | You enjoy accomplishing the end goal and want to bring people with you to accomplish the task. You are able to persuade people to get on board, but when they are no longer needed, you can move on without them. |
| Strengths | As dynamic, inspirational motivators, DI's have a knack for influencing large crowds. People naturally follow DI's, who often focus on multiple large projects at once. Likeable and confident, DI's excel at taking a creative idea and applying it to a practical purpose. Other personality types generally admire DI's for their energy and accomplishments. |
| Challenges | DI's are hard-working individualists. Immature DI's are short on patience and tact, leading to misunderstandings. To mature, DI's need to learn to slow down by spending time relaxing, listening to others and thinking through projects. |
| Under Pressure | DI’s tend to be driven by the task and a desire for people to get along. However, at times they may sacrifice the relationships for the task. |
| Motivation | Results, recognition, control |
| Team Contribution | They contribute to a team by establishing the vision and motivating people. |
| Leadership Style | DI's are high-powered visionaries who are interested in progress and motivating groups of people. They inspire loyalty and change, and expect goals to be met. Quick decision-makers, DI's value clarity and brevity. DI's are leaders who have what it takes to change the course of a business or reinvigorate a brand. |
| Follower Style | While DI's are not rule-followers, they excel at meeting goals. They are energetic, independent workers who need change, challenge and contact with other people. DI's set high standards and have excellent communication skills. |

| DS | Detail |
| --- | --- |
| Description | You enjoy accomplishing the end goal and want to accomplish it without alienating people in the process. You may struggle between accomplishing the task and keeping people on board, the tradeoff is often difficult for you. |
| Strengths | As determined, independent planners, DS's are typically driven to achieve. They are visionaries who love to help others reach their own goals. A mix of creative and analytical, DS's are uniquely poised to move both people and tasks forward. Other personality types generally admire DS's for their gritty determination. |
| Challenges | DS's are objective directors who can appear to be distant and uncaring. Immature DS's are short on patience for details. To mature, DS's need to learn to let go of their frustrations by developing flexibility and putting relationships first. |
| Under Pressure | DS's become inflexible and detached. |
| Motivation | Results, loyalty |
| Team Contribution | They contribute to a team by overcoming obstacles and developing people. |
| Leadership Style | DS's are solid leaders who are interested in developing people and overcoming obstacles. They value loyalty and set a steady pace, smoothing over difficult situations and mentoring future leaders. DS's have what it takes to make steady progress while helping each team member reach their potential. |
| Follower Style | DS's excel at team building. They are focused, independent workers who need the freedom to choose their methods and timing of work. |

| DC | Detail |
| --- | --- |
| Description | You enjoy accomplishing the end goal as well as all of the steps needed to accomplish the goal. You have an excellent ability to see the end goal and know the specific steps needed to accomplish this which can make it difficult to work with you on a team. |
| Strengths | DC's are determined, hard-working creators. Driven to be competent, DC's like to be in charge. Other personality types generally admire DC's for their ability to get a great deal of work done in a short time frame. |
| Challenges | DC's are perfectionists who can appear to be uncaring, frazzled and pushy. Immature DC's are short on patience and consideration, leading them to neglect relationships. They can be great decision makers, but rarely consider input from others. To mature, DC's need to learn to acknowledge other people's needs by listening and slowing down. |
| Under Pressure | DC's are defiant, confrontational and inflexible. |
| Motivation | Results, challenge, control |
| Team Contribution | They contribute to a team by setting an energetic pace and seeking solutions. |
| Leadership Style | DC's are excellent administrators who value clarity and brevity. They speak truth and keep others focused, see problems clearly and provide workable solutions. DC's are leaders who have what it takes to set the vision and move teams forward quickly. |
| Follower Style | DC's are solution-focused, and they arrive at solutions quickly and accurately. They are independent, tenacious workers who need challenging deadlines and the space to work at their own rapid pace. DC's work is motivated by their own personal standards of excellence, creativity and strong resolve. |

| I | Detail |
| --- | --- |
| Description | You enjoy bringing energy and life to people that you are with. You may not be able to keep focused on the task, but you enjoy hanging with people. |
| Strengths | As inspiring and fun entertainers, I's typically have above-average communication skills. They are very socially active and have a wide circle of friends. High-energy and optimistic, I's easily motivate others to action. Other personality types generally admire I's for their natural friendliness and confidence, especially in new environments. |
| Challenges | I's have a flair for the dramatic and can be more concerned with popularity than results. Immature I's are short on focus and patience, leading to impulsive decision-making. To mature, I's need to learn to slow down, accept advice from others and consider the consequences before acting or speaking. They can do this by developing critical listening skills and honing organizational habits. |
| Under Pressure | I's attack then withdraw emotionally. |
| Motivation | Recognition, approval, acceptance |
| Team Contribution | They contribute to a team by influencing people and solving problems. |
| Leadership Style | I's are creative problem-solvers who are interested in bringing people together. They focus on the future, encourage team members and use positive humor to relieve interpersonal or organizational tension. I's are leaders who have what it takes to motivate others to succeed. |
| Follower Style | While I's can be distractible, they excel at collaboration. They are quick workers who need variety in their schedules and appreciation for their efforts. I's work best in a team environment with lots of feedback. |

| ID | Detail |
| --- | --- |
| Description | You enjoy bringing energy and life to people that you are with and moving them in a direction to accomplish a task. You may not always accomplish the task, because you don’t want to hurt peoples’ feelings. |
| Strengths | As friendly, positive motivators, ID's generally gain respect and admiration quickly. They are inspirational figures that love large groups of people. Talkative and interested, ID's have a desire to understand people. Other personality types generally admire ID's for their confident, easy leadership. |
| Challenges | ID's are driven leaders who are always in the middle of something. Immature IDs tend to be fidgety and overconfident and exaggerating, with a tendency to jump into things without thinking them through. To mature, ID's need to focus on being more studious and still; making decisions carefully instead of following popular opinion. |
| Under Pressure | ID's become aggressive and pushy. They will become talkative to convince you their way is best. |
| Motivation | Recognition, approval, results |
| Team Contribution | They contribute to a team by getting results and solving conflicts. |
| Leadership Style | ID's are inspiring managers who value motivation and action. They smoothly influence and direct their teams, converting others to their viewpoint and creating mutually beneficial environments. ID's are leaders who have what it takes to get results through people. |
| Follower Style | While IDs tend to be impulsive, they excel at effective communication. They are friendly, determined workers who need exciting opportunities, freedom and recognition. ID's are often successful salespeople and make a good match when paired with analytical co-workers. |

| IS | Detail |
| --- | --- |
| Description | You enjoy bringing energy and life to people that you are with and keeping everyone content and on board in long term relationships. You would tend to focus more on people than the task at hand, which may frustrate task-oriented people. |
| Strengths | As warm, encouraging listeners, IS's typically have outstanding people skills. They are efficient and steadfast in their work. IS's like to please and serve people and are usually well liked. Other personality types generally admire IS's for their casual poise and genuine friendships. |
| Challenges | IS's are patient, empathetic souls who can be too tolerant of non-producers. Immature IS's are short on objectivity, taking criticism very personally. To mature, IS's need to learn to stand up for themselves and develop boundaries. |
| Under Pressure | IS's prefer withdrawing over resolution. |
| Motivation | Acceptance, relationships, recognition |
| Team Contribution | They contribute to a team by providing motivation and inspiring loyalty. |
| Leadership Style | IS's are considerate guides who prefer to be in leadership positions. They make decisions that account for others' feelings and don't force ideas on people. IS's are leaders who have what it takes to develop strong, supportive teams. |
| Follower Style | While IS's are not typically organized, they are top-notch team players. They are thoughtful, diligent workers who need deadlines, guidelines and personal attention to do their best. IS's have strong problem-solving skills. |

| IC | Detail |
| --- | --- |
| Description | You enjoy bringing energy and life to people that you are with as well as following rules and procedures. Because you have competing behavioral needs of enjoying people and focusing on details; you may find yourself torn between meeting the needs of people and paying attention to the rules or processes necessary to accomplish a task well. |
| Strengths | As competent teachers, IC's typically like to follow the rules. They are skilled at making strangers comfortable and are often excellent judges of character. Observant and friendly, IC's communicate carefully and thoughtfully. Other personality types generally admire IC's for their easy, informal manner of relating to people and their ability to articulate complex issues clearly. |
| Challenges | IC's can be a little too pushy and focused on winning. Immature IC's can be impatient and critical, insensitive and risk-averse leading to poor decision-making. To mature, IC's need to learn to develop patience and sensitivity toward others and keep an open mind toward change. |
| Under Pressure | IC's become questioning and frustrated. |
| Motivation | Acceptance, completion |
| Team Contribution | They contribute to a team by communicating clearly and resolving problems. |
| Leadership Style | IC's are dominant leaders who value both influence and results. They prefer to lead, value people, follow established rules and look for mutually beneficial resolutions. IC's are leaders who have what it takes to recruit people and solve problems. |
| Follower Style | While IC's can be flexible and precise, they excel at delivering quality. They are encouraging, conscientious, workers who need exact guidelines and social approval. IC's constantly push themselves to do better. |

| S | Detail |
| --- | --- |
| Description | You enjoy a stable and consistent pace with everyone in harmony. You may have difficulty with change because it usually involves some sense of the unknown. |
| Strengths | As low-key, sensitive team players, S's typically excel at listening, understanding and supporting their close friends. They are warm-hearted and predictable. Friendly yet quiet, S's often seek peace and predictable processes. Other personality types generally admire S's for their dependability and ability to infuse their environment with a sense of calmness. |
| Challenges | S's are pleasers who often have a hard time saying no. Overly self-sacrificing and possessive, they can internalize their feelings of irritation and hold grudges for long periods of time. Immature S's will seek peace at any cost, leading to a difficulty in establishing priorities. To mature, S's need to learn to set appropriate boundaries by developing their ability to withstand minor conflicts and politely declining some opportunities. |
| Under Pressure | S's are stubborn and quiet, reluctantly giving in. |
| Motivation | Relationships, appreciation, security |
| Team Contribution | They contribute to a team by building relationships and providing security. |
| Leadership Style | S's are team-focused leaders who are interested in nurturing individual talent and team coordination. They seek input, listen well and make decisions slowly. S's can be excellent leaders who have what it takes to reconcile interpersonal conflicts and build stable bonds. |
| Follower Style | While S's are non-confrontational, they excel at providing dependable, loyal support. They are conscientious, compliant workers who need encouragement, a stable work environment and clear rules and guidelines. S's work well with many other personality styles. |

| SD | Detail |
| --- | --- |
| Description | You enjoy a stable and consistent pace with everyone in harmony while also wanting to accomplish a goal and/or task. You may struggle with valuing how to get the task done, while attempting to keep things consistent and everyone in harmony. |
| Strengths | As loyal friends, SD's generally enjoy secure relationships. They are motivated by major challenges that allow them to do great things. Steady and kind, SD's prefer stability and small groups of people. Other personality types generally admire SD's for their consistency and determination to succeed. |
| Challenges | SD's are focused planners who are intimidated by large crowds and instability. Immature SD's can appear uncaring and distant when they are in the zone, leading to damaged relationships. To mature, SD's need to learn to value relationships without dominating them, even if that means deviating from the plan. |
| Under Pressure | SD's become passive aggressive. |
| Motivation | Stability, harmony and challenge |
| Team Contribution | They contribute to a team by aiming high and solving problems. |
| Leadership Style | SD's are quiet leaders who are interested in getting the job done with a small, competent, hard-working team. They are calm and steady. SD's are leaders who have what it takes to overcome obstacles and create successful plans. |
| Follower Style | While SD's are not quick decision-makers, they excel at objective analysis. They are focused, independent workers who set personal goals and follow their inner drive to meet deadlines. SD's don't quit. |

| SI | Detail |
| --- | --- |
| Description | You enjoy a stable and consistent pace with everyone in harmony as well as having fun in the moment. You would tend to focus more on people than the task at hand, which may frustrate task-oriented people. |
| Strengths | As stable influencers, SI's easily convince others to follow them. They are kind, considerate and talkative. Tolerant and forgiving, SI's have many friends and seem to represent others well. Other personality types generally admire SI's for their casual confidence and genuine warmth. |
| Challenges | SI's are empathetic listeners who can be highly sensitive, distractible, or careless, tolerating non-performers too long. Immature SI's have difficulty finishing their work and listening to instructions, leading to extra burden on team members. To mature, SI's need to learn to pay attention to the details, stick with a job until it is complete and deal with criticism constructively. |
| Under Pressure | SI's prefer withdrawal over resolution. |
| Motivation | Acceptance, peace, appreciation |
| Team Contribution | They contribute to a team by mentoring and influencing people. |
| Leadership Style | SI's are nonchalant leaders who lead by quietly influencing others' opinions. They do not force their opinions on people, considering each point of view in order to arrive at peaceable solutions. SI's are leaders who have what it takes to share the vision and represent their team well. |
| Follower Style | While SI's are not task-oriented, they excel at working with a team. They are sensitive, steady workers who need opportunities to share and shine. SI's can be very influential and concerned for team morale. |

| SC | Detail |
| --- | --- |
| Description | You enjoy a stable and consistent pace with everyone in harmony, while maintaining high standards and precise procedures. You may tend to hold high standards for yourself, your work as well as those around you, which may cause others not to meet your expectations. |
| Strengths | As loyal friends, SC's typically enjoy small groups of people and are particularly sensitive to the needs of others. They are private and independent peacemakers. Contemplative and systematic, SC's like to carefully weigh evidence and take their time drawing logical conclusions. Other personality types generally admire SC's for their dependability and patience. |
| Challenges | SC's are careful thinkers who can be critical, shy, pessimistic and overly sensitive. Immature SC's are indecisive and stubborn. They have difficulty adapting to change. To mature, SC's need to learn to make decisions, take initiative and agree to try out new ideas with objectivity. |
| Under Pressure | SC's become frustrated and argumentative. |
| Motivation | Peace, acceptance, accuracy |
| Team Contribution | They contribute to a team by focusing on details and providing dependability. |
| Leadership Style | SC's lead with common sense and compassion, always looking out for the underdog. They are thoughtful and supportive, successful and determined. SC's are leaders who have what it takes to strengthen the weaker members of the team and steadily raise the quality of work that their team is responsible for. |
| Follower Style | While SC's are not outspoken, they excel at working with a team. They are loyal, considerate workers who need security, boundaries and justice. SC's are detail-oriented and plan their work carefully, asking questions and collecting data. |

| C | Detail |
| --- | --- |
| Description | You enjoy maintaining high standards and following procedures correctly. You may have difficulty accepting the lack of quality in projects or people around you. |
| Strengths | As competent, reserved thinkers, C's typically apply very high standards to themselves and others. They are thorough and systematic, often preferring to work behind the scenes. Analytical and logical, C's are able to construct a complete, organized picture out of many scattered details. Other personality types generally admire C's for their ability to create clear organizational patterns out of chaos. |
| Challenges | C's are perfectionists who can be critical, overly sensitive and reluctant to try something new. Immature C's are short on grace and flexibility, becoming controlling and bound by procedures at the expense of relationships. To mature, C's need to learn to become adaptable and friendly by concentrating on other personalities' strengths rather than their short comings. |
| Under Pressure | C's avoid conflict and become defensive. |
| Motivation | Accuracy, quality |
| Team Contribution | They contribute to a team by focusing on details and setting high standards. |
| Leadership Style | C's are natural administrators who value quality and logic. They focus on the details, define situations and analyze information, making decisions slowly and carefully. C's are leaders who have what it takes to analyze risks and implement strategic plans. |
| Follower Style | While C's are not outgoing, they excel at one-on-one mentorship. They are industrious, conscientious workers who need clearly defined boundaries and a stable work environment. C's are motivated by explanations and projects that stimulate their thinking. |

| CD | Detail |
| --- | --- |
| Description | You enjoy maintaining high standards and following procedures correctly while also accomplishing the task. You may be seen by others as being only concerned with accomplishing a goal to the exclusion of the people in the process. |
| Strengths | As systematic problem-solvers, CD's are typically competitive with themselves, evaluating details and setting standards. They value accuracy and precision and are willing to stand up for what they believe is right. Sociable and creative, CD's can effectively initiate change. Other personality types generally admire CD's for their originality and confidence. |
| Challenges | CD's are bound by procedures and methods, and can be perfectionistic, wary and risk averse. Immature CD's are short on patience and flexibility, leading to problems delegating. To mature, CD's need to learn to be sensitive to others' needs and to create positive environments by developing their listening skills and valuing people and data equally. |
| Under Pressure | CD's become aggressive and stubborn. |
| Motivation | Respect, control, results |
| Team Contribution | They contribute to a team by providing focus and initiating activity. |
| Leadership Style | CD's are purposeful and value clarity, brevity and accuracy. They are good administrators, making decisions carefully, keeping others focused and solving problems. CD's are leaders who have what it takes to keep projects moving and stay in tune with their team's morale. |
| Follower Style | While CD's are not delegators, they excel at setting high standards for the whole team. They are meticulous, quick-thinking workers who need challenging assignments and deadlines. CD's try to do their best, studying people and problems to craft the best solutions. |

| CI | Detail |
| --- | --- |
| Description | You enjoy maintaining high standards and following procedures correctly while also valuing having fun with people in the process. You may be frustrated because it is difficult to maintain excellence while having fun with people. |
| Strengths | As communicators, CI's generally make excellent teachers. They provide positive feedback, encouraging people to master new skills and developing trust quickly. Insightful, CI's are great judges of character. Other personality types generally admire CI's for their easy demeanor and competence. |
| Challenges | CI's can be quiet, insecure and exacting. Immature CI's are highly sensitive and worry too much about what others think of them, leading to difficulty making decisions. To mature, CI's need to learn to be more self-motivated and assertive. |
| Under Pressure | CI's become competitive, impatient and critical. |
| Motivation | Acceptance, completion, peace |
| Team Contribution | They contribute to a team by influencing people and stabilizing situations. |
| Leadership Style | CI's are balanced observers who value people and data. They are knowledgeable and analytical, influencing people with logic, and consistently meeting their goals. CI's are leaders who have what it takes to do great things through people. |
| Follower Style | While CI's are not assertive, they excel at high-quality work. They are competent, conscientious specialists who consistently push themselves to do better. They need approval, goals and logical explanations from their supervisors. CI's enjoy large and small groups of people. |

| CS | Detail |
| --- | --- |
| Description | You enjoy maintaining high standards and following procedures correctly while keeping a stable and consistent pace. You may tend to hold high standards for yourself, your work as well as those around you; which may cause others not to meet your expectations. |
| Strengths | As systematic thinkers, CS's typically influence people through facts. They like to do one thing at a time and do it right the first time. Friendly and caring, CS's have a tendency to keep to themselves and do not usually seek attention. Other personality types generally admire CS's for their competence and stability. |
| Challenges | CS's are sensitive perfectionists who can be risk-averse, shy, pessimistic and stubborn. Immature CS's are short on flexibility and decisiveness, leading to unresolved conflict. To mature, CS's need to get out of their comfort zones and work to recognize the strengths of other personality types. |
| Under Pressure | CS's become critical and avoid conflict. |
| Motivation | Approval, security, quality |
| Team Contribution | They contribute to a team by focusing on details and building relationships behind the scenes. |
| Leadership Style | CS's can be powerful leaders who are interested in both details and people. Although they are not disciplinarians, they think logically and analyze intuitively. CS's are leaders who have what it takes to effectively leverage their organization's data and people. |
| Follower Style | While CS's are not agents of change, they excel at carrying out tasks correctly. They are considerate, meticulous workers who need a predictable work environment and verbal approval. CS's can be counted on to complete their projects and do an excellent job. |

[](#workingwithothers)Working with Others
=========================================

|  | D | I | S | C |
| --- | --- | --- | --- | --- |
| Encourage | Affirm their outcomes or accomplishments. | Affirm them for their personal involvement. | Affirm their consistent and stable teamwork. | Affirm their precision and doing everything right. |
| Challenge | Start with the end in mind. | Value them as a person. | Keep the atmosphere safe. | Have all of the details. |
| Relate | Be Direct | Be Enthusiastic | Be Relational | Be Analytical |
| Lead | Acknowledge what is needed. | Affirm around others. | Agree on working as a team. | Allow them to work on details. |
| Persuade | Key Question: What? | Key Question: Who? | Key Question: Why? | Key Question: How? |
| Disagree | Agree with their outcome – then ask why they feel their way is best. Next show an alternative way. | Agree with their desire – then ask them what options they considered. | Acknowledge needed change – affirm them that the change will not cause conflict. Give them time. | Acknowledge the facts – point out how the change will produce a better result. Answer their questions. |

[](#spiritualgifts)Spiritual Gifts
==================================

The Spiritual Gifts Assessment identifies the spiritual gifts an individual possesses. While this is not a comprehensive list of spiritual gifts, it does include those that are most commonly seen in action for most people.

Empowering the members of your organization to make an impact starts with identifying their spiritual gifts. From there, they are positioned to learn what these gifts are and how they fit into the functioning of your mission.

This assessment will identify clusters of dominant, supportive and other gifts for each person.

This is searchable through Data Views. If, for instance, you want to search for people to host new small groups in their homes, you could create a person Data View and select the attribute ‘Dominant Gifts’ that includes ‘Hospitality’.

Each of the 17 spiritual gifts that are assessed are broken down with descriptions below.

[](#takingtheassessment)Taking the Assessment
=============================================

The spiritual gifts assessment has one statement and five responses on whether you Strongly Agree, Agree, Somewhat Agree, Neutral, or Disagree.

Spiritual Gifts

![Spiritual Gifts Assessment](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/spiritual-gifts-assessment-v13.png)

The results are then broken up into three categories of Dominant Gifts, Supportive Gifts, and Other Gifts.

Results

![Spiritual Gifts Assessment](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/assessment-results-spiritual-gifts-v13.png)

[](#resultdetails)Result Details
================================

At the end of the assessments, you will get a page that breaks down the three areas where you scored in.

*   Dominant Gift
*   Supportive Gifts
*   Other Gifts

Each gift will be in order and have a description provided like the ones below:

|  |  |
| --- | --- |
| Wisdom | The gift of wisdom means you have insight on how knowledge may best be applied to specific needs in the Body of Christ. This involves applying Biblical truths to everyday situations. |
| Service | The gift of service means you unselfishly meet the needs of other people through practical service that is most often done behind the scenes. |
| Encouragement | The gift of encouragement allows you to counsel, model and encourage people through one's personal testimony, life and Scripture so people are comforted and encouraged to act. |
| Faith | The gift of faith helps you envision with clarity and confidence God's future direction and goals for the Body of Christ. |
| Leadership | The gift of leadership allows you to set Godly objectives, make decisions and communicate them to the Body of Christ in a way that motivates them to willingly follow and joyously work to accomplish these objectives. |
| Administration | The gift of administration means you are skilled at developing, articulating and accomplishing tasks for the accomplishment of the objectives for the Body. |
| Discernment | The gift of discernment allows you to perceive the motives, intentions and sincerity of others within relationships of the local church. |
| Prophecy | The gift of prophecy means you are able to publicly or privately speak the Word of God, so people are convicted, consoled, encouraged, challenged or strengthened. |
| Knowledge | The gift of knowledge allows you to discover, analyze, accumulate, systematize and articulate ideas that are essential for the growth and building up of the Body. |
| Mentoring | The gift of combining shepherding and teaching assists you in instructing, guiding and caring for believers in a smaller expression of the Body so that they are equipped to reach out in ministry to others, both inside and outside the church. |
| Teaching | The gift of teaching helps you to communicate instruction, so members of the Body understand how to apply spiritual principles to their own lives and ministries in every-day context. |
| Shepherding | The gift of shepherding helps you nurture a group of believers by caring for their spiritual welfare in a holistic manner on a longer-term basis. |
| Teaching | The gift of teaching helps you to communicate instruction, so members of the Body understand how to apply spiritual principles to their own lives and ministries in every-day context. |
| Giving | The gift of giving allows you to give liberally to meet the needs of others and support God's ministry with the resources which God has entrusted to you. |
| Mercy | The gift of mercy empowers you to empathize with those in need, especially those suffering and in trauma, and to manifest empathy so those in need are strengthened. |
| Evangelism | The gift of evangelism assists you in sharing the Good News of Christ in a relevant manner with people far from Christ, so they respond positively to become disciples of Jesus Christ. |
| Hospitality | The gift of hospitality enables you to reach out to others and welcome them into your home and life in a loving, warm manner. These guests feel "at home" in your presence. |
| Apostleship | The gift of apostleship means you are able to articulate the Gospel in places that are geographically, socially, ethnically or culturally different from one's background. |

[](#motivators)Motivators
=========================

The Motivators Assessment identifies what a person truly values, which drives their perspective and goals.

Because there are so many possible combinations of motivators, this assessment will demonstrate the unique set of strengths and challenges a person will face. It would be advisable to look for opportunities that require the strengths associated with a person’s top five to seven motivators, and to provide upwardly mobile opportunities for those who have a high propensity for growth. It is also helpful to evaluate the bottom five to seven motivators as venues that they should stay away from in serving if possible.

This assessment will identify the top theme or themes of motivators, along with the propensity for growth and the top five individual motivators.

[](#takingmotivators)Taking Motivators
======================================

The motivators assessment has seven possible responses to a statement. Depending on the question you may have two sets of responses.

Taking Motivators

![Motivators Assessment](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/motivators-assessment-v13.png)

The results show a growth propensity scale. The numbers range and are based on a fixed to growth mindset. They also show the composite score and ranked motivators. The results focus on your top scores to avoid clutter of showing descriptions on all the possible motivators.

Motivators Results

![Motivators Results](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/motivators-results-v13.png)

[](#growthpropensity)Growth Propensity
======================================

Growth Propensity measures your perceived mindset on a continuum between a growth mindset and a fixed mindset. These are two ends of a spectrum about how we view our capacity and potential. This number is a measurement of the current propensity for growth, but that can change for an individual over time through applied effort and awareness. Also, their growth propensity scale may be different from one area in their life to another.

[](#motivatorsthemes)Motivators Themes
======================================

Relational
----------

This theme describes how you relate to others. These motivators can best be seen as the reasons you build relationships with the people around you, and influence what you value in relationships. The greater the number of the motivators from this cluster you possess in your top five, the more strongly you will be focused on building healthy relationships.

Here are the influential motivators:

*   Caring
*   Engaging
*   Gathering
*   Relating
*   Uniting

Directional
-----------

This theme describes how you desire to give direction to a team or an organization. The motivators in this theme can be seen in the type of behavior you demonstrate in your preferred position as it relates to the direction or health of the organization or team in which you are engaged. The greater the number of the motivators from this cluster you possess in your top five, the more effective you will be providing direction within the organization.

Here are the organizational motivators:

*   Empowering
*   Leading
*   Serving
*   Transforming
*   Risking
*   Envisioning

Intellectual
------------

This theme describes how you focus your mind. These motivators can be seen in the way you think or the kind of mental activities you naturally pursue. The way you view your mental activity will be directly influenced by the motivators in this theme. Your conversations will be greatly influenced by these motivators that are in the top five of your profile.

Here are the organizational motivators:

*   Believing
*   Expressing
*   Learning
*   Perceiving
*   Meta-Thinking

Positional
----------

This theme describes how you execute your role or position within the team. The motivators in this theme can be seen in the way you approach activity, moment by moment. They dramatically influence what you value and how you spend your time or effort at work. When others look at the way you act, your behavior will be greatly determined by the motivators from this cluster that are found in your top five.

Here are the operational motivators:

*   Adapting
*   Innovating
*   Maximizing
*   Organizing
*   Pacing
*   Persevering

[](#individualmotivators)Individual Motivators
==============================================

There are 22 possible motivators in this assessment. While your Top 5 Motivators may be most helpful in understanding your results in a snapshot, you may also find it helpful to see your scores on each for a complete picture.

Adapting
--------

**Description:** You change quickly when circumstances require it. You have the capacity to be adaptable in diverse situations. You understand when the need for transformation is necessary before others do. You enjoy change. You have a desire to be on the front edge of any movement.

**Influence:** You influence others by incorporating change so that you are better prepared to handle challenges.

**Challenge:** You are so quick to adjust and adapt that you may miss the positive results of perseverance.

Believing
---------

**Description:** You pursue the principles in which you believe with dogged determination. You have a tremendous capacity to be tenacious in pursuing principles in which you trust. You clearly know what you believe and are able to articulate this to others. You have expectations for yourself and others according to these standards. You are confident that you have formed your beliefs through wise experience, counsel and judgment.

**Influence:** You influence others through your convictions.

**Challenge:** Some may see you as inflexible.

Caring
------

**Description:** You are motivated to meet the needs of others. You genuinely care for other people, especially when they are hurting. You have a large capacity for supporting others and are seen as empathetic, especially for those in difficult situations. You may find it easy to identify with the pain that others experience.

**Influence:** You influence others with your care and compassion.

**Challenge:** You may become so consumed with meeting immediate needs that you miss long term solutions.

Empowering
----------

**Description:** You equip others to do what they are gifted to do. You have the capacity to equip and release individuals. You enjoy developing mentoring relationships and modeling leadership. You find it easy to see the strengths of others and are also aware of the areas they need to develop.

**Influence:** You influence others by investing in them to do so much more than they could do without your intentional effort.

**Challenge:** You may not always address negative issues in the lives of those you are developing.

Engaging
--------

**Description:** This motivator influences you to become deeply involved in the needs of the community. You understand the community and have a keen sense of how to meet their needs. You are frustrated when you see these needs go unmet. You have a desire to be involved in various organizations that are making an impact in your community.

**Influence:** You influence others by engaging your community’s needs in real and tangible ways to make a difference.

**Challenge:** You may not always see issues which need addressing in your life because you are so focused on the community.

Expressing
----------

**Description:** You seek opportunities to speak in a variety of environments. You have the capacity to speak effectively and enjoy talking and engaging others about your areas of expertise. You find it easy to articulate your thoughts and to share them in a credible manner. You are not intimidated by speaking in large or small groups, and you find pleasure in persuading others to your perspective.

**Influence:** You influence others through speaking and sharing your perspective.

**Challenge:** You may spend more time speaking to people rather than listening to them.

Gathering
---------

**Description:** You bring people together. You have the capacity to engage people and find they want to be around you. You understand what people want in a relationship and are able to meet those needs. You enjoy bringing people together. You have a desire to influence those who are drawn to you.

**Influence:** You influence others by bringing them along with you wherever you go.

**Challenge:** You may enjoy bringing people together more than actually accomplishing something together.

Innovating
----------

**Description:** You continuously look for new ways to do everything. You have the capacity to see what could be done better. You understand why something isn’t working, and you can figure out how to do it differently. You enjoy finding new solutions and have a desire to create something from nothing. You may be frustrated if you are not challenged. You never look for the easy answer.

**Influence:** You influence others by energetically tackling something that may never have been done before.

**Challenge:** You may enjoy creating so much that there is no execution of a plan to bring that innovation to reality.

Leading
-------

**Description:** You bring others together to accomplish a task. You have the capacity to take responsibility for others to achieve something together. You understand what needs to happen in most situations and can mobilize others to work together to undertake it. You enjoy when others follow your lead, and you have a desire to make an impact working together with others.

**Influence:** You influence others by your ability to inspire and engage them to accomplish more together than they could have accomplished individually.

**Challenge:** You may not feel comfortable just being “one of the team” when you are not the sole leader.

Learning
--------

**Description:** You continually seek out opportunities to understand new things. You have the capacity to continue learning through various media. You understand that there is so much more to know about our world, and you feel stagnant if you are not growing in some manner. You have a desire to learn all that you can about everything. Every opportunity is an opportunity to learn and grow.

**Influence:** You influence others by sharing what you are learning in one area and helping them apply it in different areas.

**Challenge:** You may enjoy learning so much that there is little effort to actually apply what you learn.

Maximizing
----------

**Description:** You only invest your time, money or effort in areas that can give you a significant rate of return. You have the capacity to see opportunities where a substantial benefit will result. You understand what is necessary to make an impact using your resources.

**Influence:** You influence others through your strategic sense of when and where to invest resources for maximum impact.

**Challenge:** You may find it difficult to serve others on the team rather than maximizing your own time and effort.

Organizing
----------

**Description:** You seek opportunities that allow you to bring chaos under control. You have the capacity to bring order out of disorder. You understand that the “devil is in the details,” so you work on creating systems to maintain control of those details. You enjoy when everything flows as planned. You have a desire to organize various pieces into one coherent whole.

**Influence:** You influence others by bringing random fragments together to meet your goals.

**Challenge:** You may be resistant to change because it could bring unwanted chaos.

Pacing
------

**Description:** You keep a consistent and stable structure in your life and work. You have the capacity to know when your life is getting out of balance. You understand how much you can handle and what has to change for your work/life balance to achieve healthy stability. You enjoy living in a structured and consistent manner. You desire to create beneficial boundaries in all areas of your life.

**Influence:** You influence others by modeling long-term sustainable margins within life and work.

**Challenge:** You may resist a temporary imbalance that is required to complete a task with excellence.

Perceiving
----------

**Description:** You discern in others what is not readily apparent. You have the capacity to observe behaviors in others which is not consistent with what they are saying. You understand when things don’t turn out to be as they were initially described. You enjoy trying to understand others. You have a desire to find out if your intuitions are correct.

**Influence:** You influence others through your observations that can be harnessed to help the team be more effective in working together.

**Challenge:** You may not know what to do with your insights and may find yourself sharing with others who do not need to know.

Persevering
-----------

**Description:** You stay the course when trying to accomplish a goal, long after others have given up. You have the capacity to ride the ups and downs of circumstances without being defeated. You understand that all forward progress is accomplished through grit and hard work. You see demanding times as a test of your abilities. You have a desire to succeed in spite of resistance.

**Influence:** You influence others through your resilience and perseverance in difficult times.

**Challenge:** You may not be able to walk away from those situations that are simply not worth the effort.

Relating
--------

**Description:** You seek others with whom you can build relationships. You have the capacity to draw people into your sphere of trust and rapport. You understand what others want or need relationally and are able to provide that in a healthy manner. You enjoy the close relationships that develop others. You have a desire to ensure everyone is connected to other people through an interpersonal network.

**Influence:** You influence others by building strong ties with those who are socially connected to you.

**Challenge:** You may form relationships with so many people that you simply cannot maintain integrity and depth in them all.

Risking
-------

**Description:** You seek out opportunities involving risk and challenge. You have the capacity to thrive in environments which entail some level of risk. You understand how to handle uncertainty in the assignments you pursue. You enjoy the thrill of being challenged to attempt something you have not previously tried. You have a desire to do things that test you.

**Influence:** You influence others by stretching them to try something new.

**Challenge:** You will seldom be satisfied with the status quo and will therefore be easily bored.

Serving
-------

**Description:** You attend to the needs of others while pursuing their best, not your own. You have the capacity to work behind the scenes when others are not even aware of what you are doing. You understand what needs to be done long before others do. You enjoy doing the little things which may have gone unattended. You have a desire to serve others, so they can flourish.

**Influence:** You influence others by helping them, so they can function within their strengths.

**Challenge:** You and those around you may undervalue your contribution to the team.

Meta-Thinking
-------------

**Description:** You are intentionally aware of your thoughts at any given moment. You have the capacity to consciously evaluate your patterns of thought. You understand what is going on in your mind and why you are thinking the way you are. You enjoy internal reflection. You have a desire to understand why others respond as they do and to fit that into your logical mental framework.

**Influence:** You influence others by your insight into what others may be thinking.

**Challenge:** You can get lost in your thoughts rather than making a decision and moving forward.

Transforming
------------

**Description:** You try to improve the organizations to which you belong. You have the capacity to identify and understand crucial changes that need to be made to bring about progress. You understand how to motivate people to accept change and work together through that process. You have a desire to help people embrace the differences that are best for the team.

**Influence:** You influence others by enabling them to feel comfortable and committed to organizational transformation.

**Challenge:** You may experience the discomfort of leaving people behind who do not want to change, while feeling the need to keep moving ahead with the change.

Uniting
-------

**Description:** You naturally connect people around a common cause. You have the capacity to help people develop ownership of a vision. You understand how to deal with individual needs in order for the team to win. You enjoy helping others feel like a part of the group. You have a desire for everyone on the team to feel responsible for the success of the team.

**Influence:** You influence others by creating a sense of belonging for every member of the team.

**Challenge:** You may spend so long unifying the team that it hurts the critical progress or momentum.

Visioning
---------

**Description:** You dream of things that don’t yet exist. You have the capacity to picture what could be possible in the future. You understand that you can’t accomplish this by yourself; therefore, you enjoy attracting others to your picture of the future. You have a desire for your organization to be much more than it currently is and want to bring that into reality.

**Influence:** You influence others by inspiring and encouraging them to see much more than their current reality.

**Challenge:** You can tend to live in the future and get frustrated with the realities of the current situation.

[](#emotionalintelligence)Emotional Intelligence
================================================

The Emotional Intelligence, or EQ, Assessment is a measure of individuals’ developed skills in understanding the emotions of themselves and others, and appropriately harnessing their emotional responses.

Most people learn a habitual approach to emotions based on what they saw demonstrated early in their lives. EQ is not static but can be developed through intentional effort and practice over time.

This assessment will provide a ranking of high, medium or low for each of the six EQ measurements.

This is searchable through Data Views. If, for instance, you want to search for people in your database who scored high on ‘Others-Awareness’ for a new hospital visitors volunteer team, you would create a person Data View and select the attribute ‘Others-Awareness’ with a value of ‘High’.

Each of the six EQ measurements is described below.

[](#takingeq)Taking EQ
======================

The EQ assessment is similar to the format of the Spiritual Gifts assessment. There is one statement with five multiple choice answers. Never, Rarely, Sometimes, Usually and Always. On the assessment you can only choose one answer for each question.

EQ Assessment

![Taking EQ](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/taking-EQ-v13.png)

The results have five categories with a line graph from 1 – 100 which shows where you land for each category. The five are Self Awareness, Self-Regulating, Others-Awareness, Others- Regulating, EQ in problem solving and EQ under stress.

EQ Results

![EQ results](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/EQ-results-v13.png)

[](#primarymeasurements)Primary Measurements
============================================

Self-Awareness
--------------

Self-Awareness is being aware of what emotions you are experiencing and why you are experiencing them. This skill is demonstrated in real time. In other words, when you are in the midst of a discussion or even a disagreement with someone else, ask yourself these questions:

*   Are you aware of what emotions you are experiencing?
*   Are you aware of why you are experiencing these emotions?

Self-Regulating
---------------

Self-Regulating is appropriately expressing your emotions in the context of the relationships around you. This doesn’t indicate suppressing emotions; rather the ability to express your emotions appropriately. Healthy human beings experience a full range of emotions and these are important for family, friends and co-workers to understand. Self-Regulating is learning to tell others what you are feeling in the moment.

Others-Awareness
----------------

Others-Awareness is being aware of what emotions others are experiencing around you and why they are experiencing these emotions. As with understanding your own emotions, this skill is knowing in real time what another person is experiencing. This skill involves reading cues to their emotional state through their eyes, facial expressions, body posture, the tone of voice and many other ways.

Others-Regulating
-----------------

Others-Regulating is helping those around you express their emotions appropriately in the context of your relationship with them. This skill centers on helping others know what emotions they are experiencing and then asking questions or giving them permission to freely and appropriately express their emotions in the context of your relationship.

[](#leadershipmeasurements)Leadership Measurements
==================================================

The final two measurements are particularly useful for those who are in leadership roles.

EQ in Problem Solving
---------------------

EQ in Problem Solving identifies how proficient you are at using emotions to solve problems. This skill requires first being aware of what emotions are involved in the problem and what is the source of those emotions. It also includes helping others (and yourself) express those emotions appropriately in the context of the situation.

EQ Under Stress
---------------

EQ Under Stress identifies how capable you are of keeping high EQ under high-stress moments; which is particularly challenging. This skill requires highly developed Self- and Others-Awareness to understand the impact of the current stress. It also involves being able to articulate the appropriate emotions under pressure which may be different from articulating them when not under stress.

[](#conflictprofile)Conflict Profile
====================================

The Conflict Engagement Assessment is a measure of how individuals see themselves responding to conflict in a given setting. This may or may not be a fully accurate picture, depending on their self-awareness during a conflict.

Most people feel comfortable using a few approaches based on what they saw demonstrated early in their lives. And most people have different natural responses in different settings. However, everyone is capable of using all five modes; it just takes some effort to develop those they aren’t as familiar with.

This assessment will provide a ranking of high, medium or low for each of the five Conflict Engagement Modes. It will also provide an overall Conflict Engagement Theme which helps visualize how a person will resolve problems within a team or group setting.

This is searchable through Data Views. If, for instance, you want to search for people in your database who scored high on the Conflict Engagement Theme ‘Solving’ for new group leader roles, you would create a person Data View and select the attribute ‘Solving’ with a value of ‘High’.

Each of the five Conflict Engagement Modes and three Conflict Engagement Themes are described below.

[](#takingtheassessment)Taking the Assessment
=============================================

This assessment has four multiple choice answers for a statement. Strongly Disagree, Disagree, Agree and Strongly Agree.

Conflict Profile

![Taking Assessment](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/conflict-profile-assessment-v13.png)

The results you see are two graphs. One is a bar graph with the five types of modes and the other is a pie chart showing the conflict themes.

Conflict Profile Results

![Results](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/conflict-profile-results-v13.png)

[](#conflictengagementmodes)Conflict Engagement Modes
=====================================================

Winning
-------

Winning means you prefer competing over cooperating. You believe you have the right answer and you desire to prove you are right, whatever it takes. This may include standing up for your own rights, beliefs or position.

Resolving
---------

Resolving means you attempt to work with the other person in depth to find the best solution, regardless of who appears to get the most immediate benefit. This involves digging beneath the presenting issue to find a solution that offers benefit to both parties, and can take more time than other approaches.

Compromising
------------

Compromising means you find a middle ground in the conflict. This often involves meeting in the middle or finding some mutually agreeable point between both positions. This is useful for quick solutions.

Avoiding
--------

Avoiding means not pursuing your own rights or those of the other person. You typically do not address the conflict at all, if possible. This may be diplomatically sidestepping an issue or staying away from a threatening situation.

Yielding
--------

Yielding means neglecting your own interests while giving in to those of the other person. This is self-sacrificing and maybe charitable; serving or choosing to obey another when you prefer not to.

Frequently these modes are combined into a Conflict Engagement Theme. This assessment will also provide a high, medium or low ranking for each of the three themes.

[](#conflictengagementthemes)Conflict Engagement Themes
=======================================================

Solving
-------

Solving describes those who seek to use both Resolving and Compromising modes for solving conflict. By combining these two modes, they seek to solve problems as a team. Their leadership styles are highly cooperative and empowering for the benefit of the entire group.

Accommodating
-------------

Accommodating combines Avoiding and Yielding modes for solving conflict. They are most effective in roles where allowing others to have their way is better for the team, such as support roles or roles where an emphasis on the contribution of others is significant.

Winning
-------

Winning is not a combination of modes, but a theme that is based entirely on the Winning model alone for solving conflict. This theme is important for times when quick decisions need to be made and is essential for roles such as sole-proprietor.

[](#retakingassessments)Retaking Assessments
============================================

After an assessment has been taken it's possible to take it again, but you may need to adjust some configuration to allow it.

[](#assessmenttypeconfiguration)Assessment Type Configuration
=============================================================

The Assessment Type configuration can be accessed by navigating to Admin Tools > System Settings > Assessment Types. From there you can select an assessment type to view or edit its settings.

Each Assessment Type has a setting which controls how much time must pass after an assessment is completed before the same assessment can be taken again by the same person. By default, this is set to one year (365 days), but this can be adjusted as pictured below.

Another aspect to consider is whether the assessment requires a formal request for the person to take it. By default, this is turned off, so a request does not need to be sent in order for someone to take the assessment. This too can be set within the Assessment Type configuration pictured below.

Assessment Type Configuration

![Assessment Type Configuration](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/assessment-type-configuration-v13.png)

1 Assessment Paths

For the assessments that ship with Rock, the same page is used for taking an assessment (Assessment Path) and viewing the results (Assessment Results Path). Generally, you won't want to make any changes to these paths.

2 Minimum Days to Re-take

This is where you specify how many days must pass after an assessment is completed before the same assessment can be taken again by the same person.

3 Requires Request

Enable this setting if a request needs to be sent in order for someone to take an assessment. This also applies to retaking assessments. See the [Sending Requests](#sendingrequests) chapter above for additional details.

[](#accessingassessmentstoretake)Accessing Assessments to Retake
================================================================

A person on your external site can retake an assessment in one of two ways. From the _My Account_ page the person can simply click _Retake Assessment_. Or the person can click _View Results_ and can then retake the assessment from the results page.

My Account Retake Assessment

![My Account Retake Assessment](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/my-account-retake-assessment-v13.png)

Retake From Assessment Results

![Retake From Assessment Results](https://rockrms.blob.core.windows.net/documentation/Books/37/1.15.0/images/results-retake-assessment-v13.png)