import type { Question, ModelAnswer } from '../types';

export const seedQuestions: Question[] = [
  // UK Politics - Democracy and Participation
  {
    id: 'q1',
    question_text: 'Evaluate the view that the UK suffers from a democratic deficit.',
    paper: 'UK Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q2',
    question_text: 'Evaluate the view that the UK has experienced a participation crisis.',
    paper: 'UK Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q3',
    question_text: 'Evaluate the view that pressure groups are effective in the UK.',
    paper: 'UK Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Foundation',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  // UK Politics - Political Parties
  {
    id: 'q4',
    question_text: 'Evaluate the view that the Conservative Party has abandoned traditional conservatism.',
    paper: 'UK Politics',
    topic: 'Political Parties',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q5',
    question_text: 'Evaluate the view that New Labour has been abandoned by the modern Labour Party.',
    paper: 'UK Politics',
    topic: 'Political Parties',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  {
    id: 'q6',
    question_text: 'Evaluate the view that party unity is essential for electoral success.',
    paper: 'UK Politics',
    topic: 'Political Parties',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  // UK Politics - Electoral Systems
  {
    id: 'q7',
    question_text: 'Evaluate the view that FPTP should be replaced by a proportional system.',
    paper: 'UK Politics',
    topic: 'Electoral Systems',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q8',
    question_text: 'Evaluate the view that different electoral systems produce significantly different outcomes.',
    paper: 'UK Politics',
    topic: 'Electoral Systems',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Foundation',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q9',
    question_text: 'Evaluate the view that there is a strong case for reforming House of Lords elections.',
    paper: 'UK Politics',
    topic: 'Electoral Systems',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // UK Politics - Voting Behaviour
  {
    id: 'q10',
    question_text: 'Evaluate the view that social class is no longer the main factor influencing voting behaviour.',
    paper: 'UK Politics',
    topic: 'Voting Behaviour',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q11',
    question_text: 'Evaluate the view that valence factors determine election outcomes.',
    paper: 'UK Politics',
    topic: 'Voting Behaviour',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  // UK Politics - The Media
  {
    id: 'q12',
    question_text: 'Evaluate the view that the media has significant influence on political attitudes and behaviour.',
    paper: 'UK Politics',
    topic: 'The Media',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q13',
    question_text: 'Evaluate the view that social media has transformed political participation.',
    paper: 'UK Politics',
    topic: 'The Media',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Foundation',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // UK Government - The Constitution
  {
    id: 'q14',
    question_text: 'Evaluate the view that the UK should adopt a codified constitution.',
    paper: 'UK Government',
    topic: 'The Constitution',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q15',
    question_text: 'Evaluate the view that constitutional reforms since 1997 have improved UK democracy.',
    paper: 'UK Government',
    topic: 'The Constitution',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q16',
    question_text: 'Evaluate the view that parliamentary sovereignty is significant in the UK constitution.',
    paper: 'UK Government',
    topic: 'The Constitution',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  // UK Government - Parliament
  {
    id: 'q17',
    question_text: 'Evaluate the view that Parliament is effective in holding the executive to account.',
    paper: 'UK Government',
    topic: 'Parliament',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q18',
    question_text: 'Evaluate the view that the House of Lords has retained its influence.',
    paper: 'UK Government',
    topic: 'Parliament',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q19',
    question_text: 'Evaluate the view that there is a case for further reform of the House of Lords.',
    paper: 'UK Government',
    topic: 'Parliament',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Foundation',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // UK Government - Prime Minister and Executive
  {
    id: 'q20',
    question_text: 'Evaluate the view that the UK Prime Minister is now a President in all but name.',
    paper: 'UK Government',
    topic: 'Prime Minister and Executive',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q21',
    question_text: 'Evaluate the view that the Prime Minister dominates the political system.',
    paper: 'UK Government',
    topic: 'Prime Minister and Executive',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q22',
    question_text: 'Evaluate the view that collective cabinet responsibility is effective.',
    paper: 'UK Government',
    topic: 'Prime Minister and Executive',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  // UK Government - Relations Between Branches
  {
    id: 'q23',
    question_text: 'Evaluate the view that the UK has an effective separation of powers.',
    paper: 'UK Government',
    topic: 'Relations Between Branches',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q24',
    question_text: 'Evaluate the view that devolution threatens the unity of the UK.',
    paper: 'UK Government',
    topic: 'Relations Between Branches',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  // UK Government - The Supreme Court
  {
    id: 'q25',
    question_text: 'Evaluate the view that the Supreme Court has become too powerful.',
    paper: 'UK Government',
    topic: 'The Supreme Court',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q26',
    question_text: 'Evaluate the view that the Supreme Court effectively protects civil liberties.',
    paper: 'UK Government',
    topic: 'The Supreme Court',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Foundation',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Political Ideas - Liberalism
  {
    id: 'q27',
    question_text: 'To what extent do liberals agree on the role of the state?',
    paper: 'Political Ideas',
    topic: 'Liberalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q28',
    question_text: 'To what extent are classical and modern liberalism fundamentally different?',
    paper: 'Political Ideas',
    topic: 'Liberalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q29',
    question_text: 'To what extent is liberalism compatible with democracy?',
    paper: 'Political Ideas',
    topic: 'Liberalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Political Ideas - Conservatism
  {
    id: 'q30',
    question_text: 'To what extent do conservatives agree on human nature?',
    paper: 'Political Ideas',
    topic: 'Conservatism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q31',
    question_text: 'To what extent is there tension between traditional and one-nation conservatism?',
    paper: 'Political Ideas',
    topic: 'Conservatism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q32',
    question_text: 'To what extent is the New Right a departure from traditional conservatism?',
    paper: 'Political Ideas',
    topic: 'Conservatism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  // Political Ideas - Socialism
  {
    id: 'q33',
    question_text: 'To what extent do socialists agree about the means of achieving socialism?',
    paper: 'Political Ideas',
    topic: 'Socialism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q34',
    question_text: 'To what extent has social democracy betrayed socialist principles?',
    paper: 'Political Ideas',
    topic: 'Socialism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q35',
    question_text: 'To what extent do socialists agree on the nature of equality?',
    paper: 'Political Ideas',
    topic: 'Socialism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Political Ideas - Nationalism
  {
    id: 'q36',
    question_text: 'To what extent is nationalism a coherent ideology?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q37',
    question_text: 'To what extent are civic and ethnic nationalism different?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  // Political Ideas - Feminism
  {
    id: 'q38',
    question_text: 'To what extent do feminists agree on the causes of gender inequality?',
    paper: 'Political Ideas',
    topic: 'Feminism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q39',
    question_text: 'To what extent has liberal feminism been the most successful strand of feminism?',
    paper: 'Political Ideas',
    topic: 'Feminism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  // US Politics - The Constitution and Federalism
  {
    id: 'q40',
    question_text: 'Evaluate the view that the US Constitution remains relevant in the 21st century.',
    paper: 'US Politics',
    topic: 'The Constitution and Federalism',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q41',
    question_text: 'Evaluate the view that federalism effectively balances power between federal and state governments.',
    paper: 'US Politics',
    topic: 'The Constitution and Federalism',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q42',
    question_text: 'Evaluate the view that the constitutional amendment process is too difficult.',
    paper: 'US Politics',
    topic: 'The Constitution and Federalism',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // US Politics - Congress
  {
    id: 'q43',
    question_text: 'Evaluate the view that Congress is effective in carrying out its legislative function.',
    paper: 'US Politics',
    topic: 'Congress',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q44',
    question_text: 'Evaluate the view that Congress effectively holds the executive to account.',
    paper: 'US Politics',
    topic: 'Congress',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q45',
    question_text: 'Evaluate the view that partisanship has made Congress dysfunctional.',
    paper: 'US Politics',
    topic: 'Congress',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  // US Politics - The Presidency
  {
    id: 'q46',
    question_text: 'Evaluate the view that the US President is the most powerful leader in the world.',
    paper: 'US Politics',
    topic: 'The Presidency',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q47',
    question_text: 'Evaluate the view that the presidency has become too powerful.',
    paper: 'US Politics',
    topic: 'The Presidency',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q48',
    question_text: 'Evaluate the view that presidential power is largely dependent on the political context.',
    paper: 'US Politics',
    topic: 'The Presidency',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // US Politics - The Supreme Court and Civil Rights
  {
    id: 'q49',
    question_text: 'Evaluate the view that the Supreme Court has too much political power.',
    paper: 'US Politics',
    topic: 'The Supreme Court and Civil Rights',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q50',
    question_text: 'Evaluate the view that the Supreme Court effectively protects civil rights.',
    paper: 'US Politics',
    topic: 'The Supreme Court and Civil Rights',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q51',
    question_text: 'Evaluate the view that the Supreme Court appointment process is no longer fit for purpose.',
    paper: 'US Politics',
    topic: 'The Supreme Court and Civil Rights',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  // US Politics - Democracy and Participation
  {
    id: 'q52',
    question_text: 'Evaluate the view that the US electoral system is democratic.',
    paper: 'US Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q53',
    question_text: 'Evaluate the view that the Electoral College should be abolished.',
    paper: 'US Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q54',
    question_text: 'Evaluate the view that the two-party system serves the USA well.',
    paper: 'US Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  {
    id: 'q55',
    question_text: 'Evaluate the view that interest groups enhance democracy in the USA.',
    paper: 'US Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  // Global Politics - Sovereignty and Globalisation
  {
    id: 'q56',
    question_text: 'Evaluate the view that globalisation has made the nation-state obsolete.',
    paper: 'Global Politics',
    topic: 'Sovereignty and Globalisation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q57',
    question_text: 'Evaluate the view that economic globalisation has benefited developing countries.',
    paper: 'Global Politics',
    topic: 'Sovereignty and Globalisation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  // Global Politics - Global Governance
  {
    id: 'q58',
    question_text: 'Evaluate the view that the United Nations is effective in maintaining international peace.',
    paper: 'Global Politics',
    topic: 'Global Governance',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q59',
    question_text: 'Evaluate the view that the EU has been successful in achieving its objectives.',
    paper: 'Global Politics',
    topic: 'Global Governance',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  // Global Politics - Human Rights
  {
    id: 'q60',
    question_text: 'Evaluate the view that international law is effective in protecting human rights.',
    paper: 'Global Politics',
    topic: 'Human Rights',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q61',
    question_text: 'Evaluate the view that human rights are universal.',
    paper: 'Global Politics',
    topic: 'Human Rights',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  // Global Politics - Power and World Order
  {
    id: 'q62',
    question_text: 'Evaluate the view that the USA remains the dominant global power.',
    paper: 'Global Politics',
    topic: 'Power and World Order',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q63',
    question_text: 'Evaluate the view that China has challenged the existing world order.',
    paper: 'Global Politics',
    topic: 'Power and World Order',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Global Politics - Conflict and Intervention
  {
    id: 'q64',
    question_text: 'Evaluate the view that humanitarian intervention can ever be justified.',
    paper: 'Global Politics',
    topic: 'Conflict and Intervention',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q65',
    question_text: 'Evaluate the view that terrorism has become the greatest threat to global security.',
    paper: 'Global Politics',
    topic: 'Conflict and Intervention',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q66',
    question_text: 'Evaluate the view that peacekeeping operations have been successful in resolving conflicts.',
    paper: 'Global Politics',
    topic: 'Conflict and Intervention',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Foundation',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Global Politics - Regionalism and the EU
  {
    id: 'q67',
    question_text: 'Evaluate the view that the European Union is a model for other regional organisations.',
    paper: 'Global Politics',
    topic: 'Regionalism and the EU',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q68',
    question_text: 'Evaluate the view that the EU has been successful in achieving its aims.',
    paper: 'Global Politics',
    topic: 'Regionalism and the EU',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q69',
    question_text: 'Evaluate the view that countries are more likely to succeed as sovereign states rather than as members of regional organisations.',
    paper: 'Global Politics',
    topic: 'Regionalism and the EU',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  // Global Politics - Power and World Order (additional)
  {
    id: 'q70',
    question_text: 'Evaluate the view that soft power has become more significant than hard power in global politics.',
    paper: 'Global Politics',
    topic: 'Power and World Order',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q71',
    question_text: 'Evaluate the view that hard power remains more significant than soft power in contemporary global politics.',
    paper: 'Global Politics',
    topic: 'Power and World Order',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  {
    id: 'q72',
    question_text: 'Evaluate the view that the current world order is best described as multipolar.',
    paper: 'Global Politics',
    topic: 'Power and World Order',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Global Politics - Global Governance (additional)
  {
    id: 'q73',
    question_text: 'Evaluate the view that the IMF and World Bank have done more harm than good for developing countries.',
    paper: 'Global Politics',
    topic: 'Global Governance',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q74',
    question_text: 'Evaluate the view that the UN Security Council is in urgent need of reform.',
    paper: 'Global Politics',
    topic: 'Global Governance',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  {
    id: 'q75',
    question_text: 'Evaluate the view that globalisation has been advantageous for global governance.',
    paper: 'Global Politics',
    topic: 'Global Governance',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  // Global Politics - Sovereignty and Globalisation (additional)
  {
    id: 'q76',
    question_text: 'Evaluate the view that globalisation has undermined state sovereignty.',
    paper: 'Global Politics',
    topic: 'Sovereignty and Globalisation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q77',
    question_text: 'Evaluate the view that economic globalisation has significantly reduced poverty.',
    paper: 'Global Politics',
    topic: 'Sovereignty and Globalisation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q78',
    question_text: 'Evaluate the view that globalisation has made the nation-state irrelevant.',
    paper: 'Global Politics',
    topic: 'Sovereignty and Globalisation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  // Global Politics - Human Rights (additional)
  {
    id: 'q79',
    question_text: 'Evaluate the view that global governance has effectively promoted and protected human rights.',
    paper: 'Global Politics',
    topic: 'Human Rights',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  {
    id: 'q80',
    question_text: 'Evaluate the view that humanitarian intervention is always justified to protect human rights.',
    paper: 'Global Politics',
    topic: 'Human Rights',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q81',
    question_text: 'Evaluate the view that international courts and tribunals have effectively promoted global human rights.',
    paper: 'Global Politics',
    topic: 'Human Rights',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  // Global Politics - Comparative Theories
  {
    id: 'q82',
    question_text: 'Evaluate the view that realism provides a more accurate explanation of global politics than liberalism.',
    paper: 'Global Politics',
    topic: 'Comparative Theories',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  {
    id: 'q83',
    question_text: 'Evaluate the view that the spread of democracy has made the world more peaceful.',
    paper: 'Global Politics',
    topic: 'Comparative Theories',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q84',
    question_text: 'Evaluate the view that economic interdependence makes war less likely.',
    paper: 'Global Politics',
    topic: 'Comparative Theories',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Global Politics - Conflict and Intervention (additional)
  {
    id: 'q85',
    question_text: 'Evaluate the view that Responsibility to Protect (R2P) has effectively protected human rights.',
    paper: 'Global Politics',
    topic: 'Conflict and Intervention',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  {
    id: 'q86',
    question_text: 'Evaluate the view that global climate agreements have been successful.',
    paper: 'Global Politics',
    topic: 'Global Governance',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // UK Government - The Constitution
  {
    id: 'q87',
    question_text: 'Evaluate the view that the UK now needs an entrenched and codified constitution.',
    paper: 'UK Government',
    topic: 'The Constitution',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q88',
    question_text: 'Evaluate the view that the UK constitution is no longer fit for purpose.',
    paper: 'UK Government',
    topic: 'The Constitution',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  {
    id: 'q89',
    question_text: 'Evaluate the view that constitutional reform since 1997 has been a success.',
    paper: 'UK Government',
    topic: 'The Constitution',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  {
    id: 'q90',
    question_text: 'Evaluate the view that devolution has been good for Wales and Scotland but not for England and Northern Ireland.',
    paper: 'UK Government',
    topic: 'The Constitution',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q91',
    question_text: 'Evaluate the view that devolution is in danger of undermining the unity of the United Kingdom.',
    paper: 'UK Government',
    topic: 'The Constitution',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q92',
    question_text: 'Evaluate the view that devolution has created more problems than it has solved.',
    paper: 'UK Government',
    topic: 'The Constitution',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  // UK Government - Parliament
  {
    id: 'q93',
    question_text: 'Evaluate the view that although the House of Lords has less power than the House of Commons, in practice it exerts more influence on government decisions.',
    paper: 'UK Government',
    topic: 'Parliament',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q94',
    question_text: 'Evaluate the view that there should be an elected House of Lords.',
    paper: 'UK Government',
    topic: 'Parliament',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  {
    id: 'q95',
    question_text: 'Evaluate the view that the roles and membership of the House of Lords require reform.',
    paper: 'UK Government',
    topic: 'Parliament',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q96',
    question_text: 'Evaluate the view that when it comes to fulfilling their respective functions the House of Lords can be seen as more successful than the House of Commons.',
    paper: 'UK Government',
    topic: 'Parliament',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q97',
    question_text: 'Evaluate the view that Parliament is largely ineffective in shaping government legislation.',
    paper: 'UK Government',
    topic: 'Parliament',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q98',
    question_text: 'Evaluate the view that select committees are the most effective way for the House of Commons to hold the Executive to account.',
    paper: 'UK Government',
    topic: 'Parliament',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q99',
    question_text: 'Evaluate the view that the principal role of backbench MPs is now to hold the government to account.',
    paper: 'UK Government',
    topic: 'Parliament',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  // UK Government - Prime Minister and Executive
  {
    id: 'q100',
    question_text: 'Evaluate the view that power lies mainly with the Prime Minister and not the Cabinet.',
    paper: 'UK Government',
    topic: 'Prime Minister and Executive',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q101',
    question_text: 'Evaluate the view that Prime Ministers have too much power.',
    paper: 'UK Government',
    topic: 'Prime Minister and Executive',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q102',
    question_text: 'Evaluate the view that since 2010 the UK has seen a return to cabinet government.',
    paper: 'UK Government',
    topic: 'Prime Minister and Executive',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q103',
    question_text: 'Evaluate the view that the Prime Minister is now effectively a president.',
    paper: 'UK Government',
    topic: 'Prime Minister and Executive',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  {
    id: 'q104',
    question_text: 'Evaluate the view that the concepts of individual ministerial responsibility and collective ministerial responsibility are both still important.',
    paper: 'UK Government',
    topic: 'Prime Minister and Executive',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  // UK Government - Relations Between Branches
  {
    id: 'q105',
    question_text: 'Evaluate the view that since 2010 the executive has dominated Parliament.',
    paper: 'UK Government',
    topic: 'Relations Between Branches',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q106',
    question_text: 'Evaluate the view that membership of the EU undermined parliamentary sovereignty.',
    paper: 'UK Government',
    topic: 'Relations Between Branches',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q107',
    question_text: 'Evaluate how far Parliament retains sole sovereignty within the UK political system.',
    paper: 'UK Government',
    topic: 'Relations Between Branches',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2018,
    created_at: new Date().toISOString()
  },
  // UK Government - The Supreme Court
  {
    id: 'q108',
    question_text: 'Evaluate the view that the Supreme Court has too much influence over the executive.',
    paper: 'UK Government',
    topic: 'The Supreme Court',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q109',
    question_text: 'Evaluate the view that the Supreme Court operates with sufficient judicial independence and neutrality.',
    paper: 'UK Government',
    topic: 'The Supreme Court',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q110',
    question_text: 'Evaluate the view that the Supreme Court has strengthened parliamentary sovereignty.',
    paper: 'UK Government',
    topic: 'The Supreme Court',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q111',
    question_text: 'Evaluate the view that the judiciary has become too powerful.',
    paper: 'UK Government',
    topic: 'The Supreme Court',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Political Ideas - Anarchism
  {
    id: 'q112',
    question_text: 'To what extent do anarchists agree about the relationship between individuals and society?',
    paper: 'Political Ideas',
    topic: 'Anarchism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2018,
    created_at: new Date().toISOString()
  },
  {
    id: 'q113',
    question_text: 'To what extent do anarchists disagree about the nature of the future anarchist society?',
    paper: 'Political Ideas',
    topic: 'Anarchism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2018,
    created_at: new Date().toISOString()
  },
  {
    id: 'q114',
    question_text: 'To what extent do anarchists agree over human nature?',
    paper: 'Political Ideas',
    topic: 'Anarchism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q115',
    question_text: 'To what extent is an anarchist society a realistic goal?',
    paper: 'Political Ideas',
    topic: 'Anarchism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q116',
    question_text: 'To what extent are anarchist views on human nature utopian?',
    paper: 'Political Ideas',
    topic: 'Anarchism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q117',
    question_text: 'To what extent do anarchists agree on the need for common ownership in a future anarchist society?',
    paper: 'Political Ideas',
    topic: 'Anarchism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q118',
    question_text: 'To what extent are anarchists united in their views for opposing the state?',
    paper: 'Political Ideas',
    topic: 'Anarchism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q119',
    question_text: 'To what extent do anarchists have a common view of an ideal society?',
    paper: 'Political Ideas',
    topic: 'Anarchism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q120',
    question_text: 'To what extent is anarchism united in its view of the state?',
    paper: 'Political Ideas',
    topic: 'Anarchism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Foundation',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q121',
    question_text: 'To what extent do collectivist anarchists and individualist anarchists disagree on economic freedom?',
    paper: 'Political Ideas',
    topic: 'Anarchism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q122',
    question_text: 'To what extent do anarchists disagree over human nature?',
    paper: 'Political Ideas',
    topic: 'Anarchism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q123',
    question_text: 'To what extent do collectivist and individualist anarchism disagree on liberty?',
    paper: 'Political Ideas',
    topic: 'Anarchism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q124',
    question_text: 'To what extent do anarchists have a coherent view on the economy?',
    paper: 'Political Ideas',
    topic: 'Anarchism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  // Political Ideas - Ecologism
  {
    id: 'q125',
    question_text: 'To what extent is ecologism more united than divided?',
    paper: 'Political Ideas',
    topic: 'Ecologism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q126',
    question_text: 'To what extent do ecologists agree on the type of future economy they wish to create?',
    paper: 'Political Ideas',
    topic: 'Ecologism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q127',
    question_text: 'To what extent is there more agreement than disagreement within ecologism?',
    paper: 'Political Ideas',
    topic: 'Ecologism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  {
    id: 'q128',
    question_text: 'To what extent is ecologism united in its views on the economy?',
    paper: 'Political Ideas',
    topic: 'Ecologism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  {
    id: 'q129',
    question_text: 'To what extent do ecologists agree on the relationship between humans and nature?',
    paper: 'Political Ideas',
    topic: 'Ecologism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  {
    id: 'q130',
    question_text: 'To what extent do ecologists agree on the role of the state?',
    paper: 'Political Ideas',
    topic: 'Ecologism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Political Ideas - Feminism
  {
    id: 'q131',
    question_text: 'To what extent do feminists agree over human nature?',
    paper: 'Political Ideas',
    topic: 'Feminism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q132',
    question_text: 'To what extent are feminists divided on the issue of equality?',
    paper: 'Political Ideas',
    topic: 'Feminism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q133',
    question_text: 'To what extent do feminists agree over the best ways to achieve social change?',
    paper: 'Political Ideas',
    topic: 'Feminism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q134',
    question_text: 'To what extent do feminists agree that patriarchy is based on human nature?',
    paper: 'Political Ideas',
    topic: 'Feminism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q135',
    question_text: 'To what extent does the state have a key role in securing feminist goals?',
    paper: 'Political Ideas',
    topic: 'Feminism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q136',
    question_text: 'To what extent do feminists agree about the nature of the economy in a future society?',
    paper: 'Political Ideas',
    topic: 'Feminism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q137',
    question_text: 'To what extent is there more agreement than disagreement within feminism on the economy?',
    paper: 'Political Ideas',
    topic: 'Feminism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q138',
    question_text: 'To what extent is there more agreement than disagreement in feminism that the personal is the political?',
    paper: 'Political Ideas',
    topic: 'Feminism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q139',
    question_text: 'To what extent is feminism united about how society must be changed?',
    paper: 'Political Ideas',
    topic: 'Feminism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q140',
    question_text: 'To what extent is there more agreement than disagreement within feminism about equality?',
    paper: 'Political Ideas',
    topic: 'Feminism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q141',
    question_text: 'To what extent do feminists agree on the causes of female oppression?',
    paper: 'Political Ideas',
    topic: 'Feminism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Political Ideas - Multiculturalism
  {
    id: 'q142',
    question_text: 'To what extent does multiculturalism\'s support for minority rights promote divisions in society?',
    paper: 'Political Ideas',
    topic: 'Multiculturalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q143',
    question_text: 'To what extent do multiculturalists agree over the type of society they wish to create?',
    paper: 'Political Ideas',
    topic: 'Multiculturalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q144',
    question_text: 'To what extent is multiculturalism united in its core ideas?',
    paper: 'Political Ideas',
    topic: 'Multiculturalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Foundation',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  {
    id: 'q145',
    question_text: 'To what extent do multiculturalists agree about the nature of society?',
    paper: 'Political Ideas',
    topic: 'Multiculturalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  {
    id: 'q146',
    question_text: 'To what extent do multiculturalists agree on the relationship between diversity and social cohesion?',
    paper: 'Political Ideas',
    topic: 'Multiculturalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  {
    id: 'q147',
    question_text: 'To what extent do multiculturalists agree on the balance between group and individual rights?',
    paper: 'Political Ideas',
    topic: 'Multiculturalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Political Ideas - Nationalism
  {
    id: 'q148',
    question_text: 'To what extent do nationalists agree over the state?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q149',
    question_text: 'To what extent do nationalists agree over the principle of national self-determination?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q150',
    question_text: 'To what extent is nationalism more united than divided?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q151',
    question_text: 'To what extent do nationalists have a pessimistic view of human nature?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q152',
    question_text: 'To what extent do nationalists agree on the core principles and ideas of the state?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q153',
    question_text: 'To what extent do nationalists disagree about the nature of the nation?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q154',
    question_text: 'To what extent is nationalism united in its views on society?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q155',
    question_text: 'To what extent do nationalists agree on what constitutes a nation?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Foundation',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q156',
    question_text: 'To what extent is there more agreement than disagreement within nationalism in its views on the state?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q157',
    question_text: 'To what extent does nationalism have a consistent view of self-determination?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q158',
    question_text: 'To what extent does nationalism have a common view of the nation?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  {
    id: 'q159',
    question_text: 'To what extent do nationalists agree on the relationship between nationalism and internationalism?',
    paper: 'Political Ideas',
    topic: 'Nationalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // UK Politics - Democracy and Participation
  {
    id: 'q160',
    question_text: 'Evaluate the view that UK democracy is in crisis.',
    paper: 'UK Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2018,
    created_at: new Date().toISOString()
  },
  {
    id: 'q161',
    question_text: 'Evaluate the view that think-tanks, lobbyists and pressure groups have little impact on government decisions.',
    paper: 'UK Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q162',
    question_text: 'Evaluate the view that the actions of pressure groups have been more significant than government legislation in defending and promoting rights in the UK.',
    paper: 'UK Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q163',
    question_text: 'Evaluate the view that it is the media not pressure groups that has the greater influence on governments.',
    paper: 'UK Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q164',
    question_text: 'Evaluate the view that neither individual rights nor collective rights in the UK are adequately protected and guaranteed.',
    paper: 'UK Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q165',
    question_text: 'Evaluate the view that referendums held since 1997 have brought more disadvantages than advantages.',
    paper: 'UK Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q166',
    question_text: 'Evaluate the view that pressure groups undermine democracy.',
    paper: 'UK Politics',
    topic: 'Democracy and Participation',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  // UK Politics - Political Parties
  {
    id: 'q167',
    question_text: 'Evaluate the view that the only political parties that matter in our political system are the Labour and Conservative parties.',
    paper: 'UK Politics',
    topic: 'Political Parties',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q168',
    question_text: 'Evaluate the view that the current funding of UK political parties requires reform.',
    paper: 'UK Politics',
    topic: 'Political Parties',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q169',
    question_text: 'Evaluate the view that minor parties now play a significant role in UK politics.',
    paper: 'UK Politics',
    topic: 'Political Parties',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // UK Politics - Electoral Systems
  {
    id: 'q170',
    question_text: 'Evaluate the view that the various electoral systems in use in the UK make significant differences to party representation.',
    paper: 'UK Politics',
    topic: 'Electoral Systems',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q171',
    question_text: 'Evaluate the view that elections in the UK are not fully democratic.',
    paper: 'UK Politics',
    topic: 'Electoral Systems',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Advanced',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q172',
    question_text: 'Evaluate the view that alternative electoral systems have been more successful than FPTP.',
    paper: 'UK Politics',
    topic: 'Electoral Systems',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  {
    id: 'q173',
    question_text: 'Evaluate the view that the UK should adopt proportional representation for general elections.',
    paper: 'UK Politics',
    topic: 'Electoral Systems',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // UK Politics - Voting Behaviour
  {
    id: 'q174',
    question_text: 'Evaluate the view that general elections in the UK are lost by the government rather than won by the opposition.',
    paper: 'UK Politics',
    topic: 'Voting Behaviour',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2018,
    created_at: new Date().toISOString()
  },
  {
    id: 'q175',
    question_text: 'Evaluate the view that social factors determine voting behaviour.',
    paper: 'UK Politics',
    topic: 'Voting Behaviour',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2018,
    created_at: new Date().toISOString()
  },
  {
    id: 'q176',
    question_text: 'Evaluate the extent to which electoral behaviour in recent general elections has become highly volatile.',
    paper: 'UK Politics',
    topic: 'Voting Behaviour',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q177',
    question_text: 'Evaluate the view that elections in the UK are won and lost on economic competence.',
    paper: 'UK Politics',
    topic: 'Voting Behaviour',
    mark_allocation: 30,
    recommended_time: 7,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Political Ideas - Liberalism
  {
    id: 'q178',
    question_text: 'To what extent do modern and classical liberals agree over the role of the state?',
    paper: 'Political Ideas',
    topic: 'Liberalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2018,
    created_at: new Date().toISOString()
  },
  {
    id: 'q179',
    question_text: 'To what extent do modern liberals accept the ideas of classical liberals?',
    paper: 'Political Ideas',
    topic: 'Liberalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q180',
    question_text: 'To what extent is liberalism more concerned with society than the economy?',
    paper: 'Political Ideas',
    topic: 'Liberalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q181',
    question_text: 'To what extent does liberalism have a fear of the state?',
    paper: 'Political Ideas',
    topic: 'Liberalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q182',
    question_text: 'To what extent do liberals agree over the economy?',
    paper: 'Political Ideas',
    topic: 'Liberalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  {
    id: 'q183',
    question_text: 'To what extent do liberals agree about human nature?',
    paper: 'Political Ideas',
    topic: 'Liberalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  {
    id: 'q184',
    question_text: 'To what extent is there tension between liberty and equality in liberal thought?',
    paper: 'Political Ideas',
    topic: 'Liberalism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Political Ideas - Conservatism
  {
    id: 'q185',
    question_text: 'To what extent are conservatives united in their view of society?',
    paper: 'Political Ideas',
    topic: 'Conservatism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q186',
    question_text: 'To what extent is there more to unite rather than divide the New Right from One-Nation conservatives?',
    paper: 'Political Ideas',
    topic: 'Conservatism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2021,
    created_at: new Date().toISOString()
  },
  {
    id: 'q187',
    question_text: 'To what extent are conservatives united in their attitude towards the state?',
    paper: 'Political Ideas',
    topic: 'Conservatism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q188',
    question_text: 'To what extent do conservatives disagree over human nature?',
    paper: 'Political Ideas',
    topic: 'Conservatism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2024,
    created_at: new Date().toISOString()
  },
  {
    id: 'q189',
    question_text: 'To what extent do conservatives agree about the economy?',
    paper: 'Political Ideas',
    topic: 'Conservatism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  {
    id: 'q190',
    question_text: 'To what extent is paternalism a defining feature of conservatism?',
    paper: 'Political Ideas',
    topic: 'Conservatism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  // Political Ideas - Socialism
  {
    id: 'q191',
    question_text: 'To what extent are different socialists committed to equality of outcome?',
    paper: 'Political Ideas',
    topic: 'Socialism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2018,
    created_at: new Date().toISOString()
  },
  {
    id: 'q192',
    question_text: 'To what extent do socialists have conflicting views over how the economy should operate?',
    paper: 'Political Ideas',
    topic: 'Socialism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2019,
    created_at: new Date().toISOString()
  },
  {
    id: 'q193',
    question_text: 'To what extent does socialism depend on a view of society based only on class?',
    paper: 'Political Ideas',
    topic: 'Socialism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2020,
    created_at: new Date().toISOString()
  },
  {
    id: 'q194',
    question_text: 'To what extent is socialism more disunited than united?',
    paper: 'Political Ideas',
    topic: 'Socialism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2022,
    created_at: new Date().toISOString()
  },
  {
    id: 'q195',
    question_text: 'To what extent does Third Way effectively abandon socialist principles?',
    paper: 'Political Ideas',
    topic: 'Socialism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Past Paper',
    source_year: 2023,
    created_at: new Date().toISOString()
  },
  {
    id: 'q196',
    question_text: 'To what extent do socialists agree about human nature?',
    paper: 'Political Ideas',
    topic: 'Socialism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  {
    id: 'q197',
    question_text: 'To what extent is revolutionary socialism fundamentally different from social democracy?',
    paper: 'Political Ideas',
    topic: 'Socialism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Advanced',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  },
  {
    id: 'q198',
    question_text: 'To what extent has socialism abandoned its commitment to common ownership?',
    paper: 'Political Ideas',
    topic: 'Socialism',
    mark_allocation: 24,
    recommended_time: 5,
    difficulty: 'Intermediate',
    source_type: 'Predicted',
    created_at: new Date().toISOString()
  }
];

export const seedModelAnswers: ModelAnswer[] = [
  {
    id: 'ma1',
    question_id: 'q1',
    arguments_for: [
      {
        title: 'Low voter turnout',
        explanation: 'General election turnout has declined significantly since the 1950s (83% in 1950 vs 67% in 2019), suggesting widespread disengagement from the democratic process.'
      },
      {
        title: 'Unrepresentative electoral system',
        explanation: 'FPTP produces governments with minority popular vote support (Conservatives won 43.6% in 2019 but 56% of seats), creating a democratic deficit in representation.'
      },
      {
        title: 'Unelected House of Lords',
        explanation: 'The Lords remains unelected with 800+ members including hereditary peers and bishops, lacking democratic legitimacy in the legislative process.'
      },
      {
        title: 'Executive dominance',
        explanation: 'Strong party discipline and government control over the parliamentary timetable limits effective scrutiny and democratic accountability.'
      }
    ],
    arguments_against: [
      {
        title: 'Regular free elections',
        explanation: 'The UK holds regular, free and fair elections with universal suffrage, meeting the fundamental requirements of representative democracy.'
      },
      {
        title: 'Strong civil liberties',
        explanation: 'Citizens enjoy protected rights under the Human Rights Act, including freedom of expression, assembly and association essential for democracy.'
      },
      {
        title: 'Constitutional reforms',
        explanation: 'Since 1997, reforms like devolution, Freedom of Information Act and Supreme Court creation have enhanced democratic participation and accountability.'
      },
      {
        title: 'Active pressure groups',
        explanation: 'Vibrant civil society with thousands of pressure groups provides alternative channels for democratic participation beyond voting.'
      }
    ],
    synoptic_links: [
      'Link to debates about electoral reform and FPTP',
      'Connect to discussions about parliamentary sovereignty',
      'Relate to liberal democracy and constitutionalism'
    ],
    examples: [
      {
        title: '2016 EU Referendum',
        context: '72% turnout showed public can engage when issues matter directly, though also exposed democratic tensions around implementation.'
      },
      {
        title: 'Scottish Independence Referendum 2014',
        context: '84.6% turnout demonstrated high democratic engagement when constitutional questions are at stake.'
      }
    ],
    pitfalls: [
      'Avoid simply listing problems without analysis',
      'Dont ignore recent improvements to democratic processes',
      'Remember to define what constitutes a democratic deficit'
    ]
  },
  {
    id: 'ma14',
    question_id: 'q14',
    arguments_for: [
      {
        title: 'Clearer rights protection',
        explanation: 'A codified constitution would entrench fundamental rights beyond parliamentary repeal, providing stronger citizen protections than the current HRA.'
      },
      {
        title: 'Limited government',
        explanation: 'Codification would set clear boundaries on government power, preventing constitutional changes through simple parliamentary majorities.'
      },
      {
        title: 'Educational value',
        explanation: 'A single accessible document would improve public understanding of constitutional arrangements and promote democratic engagement.'
      },
      {
        title: 'Modernisation',
        explanation: 'Would bring UK in line with most modern democracies and allow rational redesign of outdated constitutional conventions.'
      }
    ],
    arguments_against: [
      {
        title: 'Flexibility',
        explanation: 'The uncodified constitution can adapt to changing circumstances without formal amendment procedures, as shown by rapid EU-related changes.'
      },
      {
        title: 'Parliamentary sovereignty',
        explanation: 'Codification would transfer power from elected Parliament to unelected judges, reducing democratic accountability.'
      },
      {
        title: 'Works in practice',
        explanation: 'UK democracy has been stable for centuries without codification, suggesting the current system is effective.'
      },
      {
        title: 'Practical difficulties',
        explanation: 'No consensus exists on what a constitution should contain; the drafting process would be politically divisive.'
      }
    ],
    synoptic_links: [
      'Connect to debates about parliamentary sovereignty',
      'Link to role of the Supreme Court',
      'Relate to liberal ideas about limited government'
    ],
    examples: [
      {
        title: 'USA Constitution',
        context: 'The difficulty of amending the US Constitution (only 27 amendments in 230+ years) shows potential inflexibility of codification.'
      },
      {
        title: 'Miller Cases (2017, 2019)',
        context: 'Supreme Court rulings on Brexit demonstrated judicial review can protect constitutional principles without formal codification.'
      }
    ],
    pitfalls: [
      'Avoid assuming codified constitutions are automatically superior',
      'Consider what would actually be included in a UK constitution',
      'Dont forget to evaluate both sides genuinely'
    ]
  },
  {
    id: 'ma20',
    question_id: 'q20',
    arguments_for: [
      {
        title: 'Media focus on leader',
        explanation: 'Modern elections are increasingly presidential-style campaigns focused on party leaders, with 2019 emphasising Johnson vs Corbyn.'
      },
      {
        title: 'Control over cabinet',
        explanation: 'PMs can hire and fire ministers at will, reshuffling cabinets to maintain control (Johnson 2020 reshuffle removed Javid).'
      },
      {
        title: 'Sofa government',
        explanation: 'Decision-making has shifted from cabinet to informal groups around the PM, bypassing collective discussion.'
      },
      {
        title: 'International role',
        explanation: 'PMs represent UK at summits and enjoy significant foreign policy autonomy, appearing presidential on the world stage.'
      }
    ],
    arguments_against: [
      {
        title: 'Lack of fixed term',
        explanation: 'Unlike US President, PM can be removed by party at any time, as shown by May 2019 and Johnson 2022 resignations.'
      },
      {
        title: 'Cabinet government persists',
        explanation: 'Important decisions still require cabinet approval; Brexit deal was debated extensively in cabinet.'
      },
      {
        title: 'Parliamentary accountability',
        explanation: 'PM must face Parliament weekly at PMQs and can be defeated on legislation, unlike US President.'
      },
      {
        title: 'Party constraints',
        explanation: 'PM depends on party support; backbench rebellions have defeated governments and forced policy U-turns.'
      }
    ],
    synoptic_links: [
      'Link to parliamentary sovereignty and executive-legislature relations',
      'Connect to collective cabinet responsibility',
      'Relate to electoral systems and mandate theory'
    ],
    examples: [
      {
        title: 'Boris Johnson resignation 2022',
        context: 'Mass cabinet resignations forced PM out, demonstrating limits of presidential power thesis.'
      },
      {
        title: 'Theresa May Brexit defeats',
        context: 'Three defeats on Withdrawal Agreement showed Parliament can block PM despite government majority.'
      }
    ],
    pitfalls: [
      'Avoid comparing directly to US system without noting key differences',
      'Remember PM power varies by context and personality',
      'Consider whether presidentialism is about style or substance'
    ]
  },
  {
    id: 'ma27',
    question_id: 'q27',
    arguments_for: [
      {
        title: 'Core agreement on limited state',
        explanation: 'All liberals believe in constitutionalism, rule of law and protection of individual rights from state interference.'
      },
      {
        title: 'Foundational principles',
        explanation: 'Classical and modern liberals share commitment to tolerance, rationalism and belief in human progress through reason.'
      },
      {
        title: 'Support for capitalism',
        explanation: 'Both strands accept market economy as basis for prosperity, differing only on degree of regulation needed.'
      }
    ],
    arguments_against: [
      {
        title: 'Classical vs modern on intervention',
        explanation: 'Classical liberals favour minimal nightwatchman state (Locke, Smith) while modern liberals support welfare intervention (Rawls, Beveridge).'
      },
      {
        title: 'Different views on freedom',
        explanation: 'Classical liberals prioritise negative freedom (absence of constraint) while modern liberals emphasise positive freedom (ability to develop).'
      },
      {
        title: 'Economic policy',
        explanation: 'Fundamental disagreement between free market approach of classical liberals and progressive taxation/redistribution of modern liberals.'
      },
      {
        title: 'Equality debates',
        explanation: 'Classical liberals accept only foundational equality while modern liberals pursue equality of opportunity through state action.'
      }
    ],
    synoptic_links: [
      'Link to debates between liberalism and socialism on equality',
      'Connect to conservative critiques of liberal state intervention',
      'Relate to contemporary debates about neoliberalism'
    ],
    examples: [
      {
        title: 'Beveridge Report 1942',
        context: 'Liberal Beveridge designed welfare state, showing modern liberal commitment to enabling state.'
      },
      {
        title: 'Hayek Road to Serfdom',
        context: 'Classical liberal critique of state intervention as threat to individual liberty.'
      }
    ],
    pitfalls: [
      'Dont oversimplify the classical/modern divide',
      'Avoid treating liberalism as single unified ideology',
      'Remember to include key thinker references'
    ]
  },
  {
    id: 'ma58',
    question_id: 'q58',
    arguments_for: [
      {
        title: 'Peacekeeping successes',
        explanation: 'UN peacekeeping has achieved successes in Namibia, El Salvador and Mozambique, helping end conflicts and supervise transitions.'
      },
      {
        title: 'Diplomatic platform',
        explanation: 'Security Council provides forum for major powers to negotiate, potentially preventing escalation of disputes.'
      },
      {
        title: 'International legitimacy',
        explanation: 'UN authorisation provides legitimacy for interventions (Gulf War 1991, Libya 2011), constraining unilateral action.'
      },
      {
        title: 'Norm creation',
        explanation: 'UN has established important norms like R2P that shape state behaviour and expectations around intervention.'
      }
    ],
    arguments_against: [
      {
        title: 'P5 veto paralysis',
        explanation: 'Veto power has blocked action on Syria, with Russia and China vetoing resolutions multiple times, preventing effective response.'
      },
      {
        title: 'Enforcement limitations',
        explanation: 'UN lacks standing army and depends on member state contributions, limiting capacity for effective enforcement.'
      },
      {
        title: 'Failed interventions',
        explanation: 'Srebrenica 1995 massacre and Rwanda 1994 genocide occurred despite UN presence, showing fundamental limitations.'
      },
      {
        title: 'Great power bypassing',
        explanation: 'Major powers act unilaterally when UN blocks action (Kosovo 1999, Iraq 2003), undermining UN authority.'
      }
    ],
    synoptic_links: [
      'Link to realist vs liberal debates about international institutions',
      'Connect to sovereignty and intervention debates',
      'Relate to discussions of changing world order and US hegemony'
    ],
    examples: [
      {
        title: 'Syrian Civil War',
        context: 'Multiple Russian vetoes prevented UN action despite massive humanitarian crisis and chemical weapons use.'
      },
      {
        title: 'Libya 2011',
        context: 'R2P-authorised intervention succeeded in protecting civilians but led to regime change and subsequent instability.'
      }
    ],
    pitfalls: [
      'Avoid judging UN only by high-profile failures',
      'Consider structural constraints not just political will',
      'Remember UN has broader role beyond peace and security'
    ]
  },
  // US Politics Model Answers
  {
    id: 'ma40',
    question_id: 'q40',
    arguments_for: [
      {
        title: 'Adaptability through interpretation',
        explanation: 'The vagueness of the Constitution allows it to be interpreted for modern circumstances. The Supreme Court has applied 18th-century principles to issues like internet privacy and same-sex marriage (Obergefell v Hodges 2015).'
      },
      {
        title: 'Enduring principles',
        explanation: 'Core principles of separation of powers, checks and balances, and federalism remain relevant for preventing tyranny and protecting liberty in the 21st century.'
      },
      {
        title: 'Bill of Rights protection',
        explanation: 'Constitutional rights continue to protect citizens - First Amendment protects free speech online, Fourth Amendment debates around digital surveillance show ongoing relevance.'
      },
      {
        title: 'Successful longevity',
        explanation: 'The Constitution has survived civil war, depression, and world wars. Its 230+ year survival suggests fundamental soundness and continued relevance.'
      }
    ],
    arguments_against: [
      {
        title: 'Outdated electoral provisions',
        explanation: 'The Electoral College has produced presidents who lost the popular vote (Trump 2016, Bush 2000), undermining democratic legitimacy in modern mass democracy.'
      },
      {
        title: 'Amendment difficulty',
        explanation: 'The supermajority requirements make formal amendment nearly impossible - only 27 amendments in 230+ years. Issues like gun control cannot be addressed through constitutional change.'
      },
      {
        title: 'Unrepresentative Senate',
        explanation: 'Equal state representation means Wyoming (580,000 people) has same Senate power as California (39 million), creating significant democratic deficit.'
      },
      {
        title: 'Gridlock and dysfunction',
        explanation: 'Separation of powers designed for 18th-century compromise now produces partisan gridlock, government shutdowns, and policy paralysis.'
      }
    ],
    synoptic_links: [
      'Compare with UK uncodified constitution and flexibility',
      'Link to debates about originalism vs living constitution',
      'Connect to structural approach in comparative theory'
    ],
    examples: [
      {
        title: 'Citizens United v FEC (2010)',
        context: 'Supreme Court applied First Amendment to campaign finance, showing Constitution can address modern issues but with controversial results.'
      },
      {
        title: 'Dobbs v Jackson (2022)',
        context: 'Overturning Roe v Wade demonstrated how constitutional interpretation can dramatically shift, questioning stability of rights protection.'
      }
    ],
    pitfalls: [
      'Avoid simply listing constitutional features without evaluation',
      'Must consider both adaptability and rigidity arguments',
      'Remember to reference specific modern examples post-2005'
    ]
  },
  {
    id: 'ma41',
    question_id: 'q41',
    arguments_for: [
      {
        title: 'Policy experimentation',
        explanation: 'States serve as "laboratories of democracy" (Justice Brandeis). Different approaches to marijuana legalisation, healthcare, and minimum wage allow policy testing before national adoption.'
      },
      {
        title: 'Prevents tyranny',
        explanation: 'Division of power between federal and state governments prevents concentration of power. States can resist federal overreach, as seen in sanctuary cities opposing immigration enforcement.'
      },
      {
        title: 'Responsive local government',
        explanation: 'State governments can respond to local needs and preferences. Texas and California pursue different policies reflecting their populations\' values.'
      },
      {
        title: 'Constitutional protection',
        explanation: 'Tenth Amendment reserves powers to states, and Supreme Court has reinforced state sovereignty in cases like Printz v United States (1997).'
      }
    ],
    arguments_against: [
      {
        title: 'Federal government dominance',
        explanation: 'Commerce Clause expansion and federal grants with conditions have dramatically increased federal power. States depend on federal funding and must comply with federal mandates.'
      },
      {
        title: 'Inconsistent rights protection',
        explanation: 'Federalism creates patchwork of rights - abortion access, voting rights, and LGBTQ+ protections vary dramatically by state, creating inequality.'
      },
      {
        title: 'Race to the bottom',
        explanation: 'States compete to attract business through lower taxes and regulations, potentially undermining worker protections and environmental standards.'
      },
      {
        title: 'Inefficiency and confusion',
        explanation: '50 different sets of laws create complexity for businesses and citizens. COVID-19 response showed problems of uncoordinated state approaches.'
      }
    ],
    synoptic_links: [
      'Compare with UK devolution - asymmetric vs constitutional federalism',
      'Link to debates about New Federalism under Reagan and subsequent presidents',
      'Connect to structural approach explaining different outcomes'
    ],
    examples: [
      {
        title: 'Marijuana legalisation',
        context: 'States like Colorado legalised recreational marijuana despite federal prohibition, demonstrating state autonomy but creating legal conflicts.'
      },
      {
        title: 'Affordable Care Act',
        context: 'States could choose whether to expand Medicaid, showing federalism in action but creating unequal healthcare access.'
      }
    ],
    pitfalls: [
      'Avoid describing federalism without evaluating its effectiveness',
      'Consider both cooperative and dual federalism models',
      'Must reference recent examples of federal-state relations'
    ]
  },
  {
    id: 'ma42',
    question_id: 'q42',
    arguments_for: [
      {
        title: 'Near impossibility of amendment',
        explanation: 'Only 27 amendments in 230+ years, with last substantive amendment (26th) in 1971. Two-thirds of Congress plus three-quarters of states is extraordinarily high bar.'
      },
      {
        title: 'Minority veto power',
        explanation: '13 states representing less than 5% of population can block amendments. Small state overrepresentation gives rural minority veto over urban majority.'
      },
      {
        title: 'Urgent issues unaddressed',
        explanation: 'Despite widespread support, issues like campaign finance reform, Electoral College reform, and gun control cannot be addressed through constitutional change.'
      },
      {
        title: 'Judicial workaround reliance',
        explanation: 'Difficulty of amendment forces reliance on Supreme Court interpretation. Unelected judges effectively amend Constitution because formal process is blocked.'
      }
    ],
    arguments_against: [
      {
        title: 'Stability and deliberation',
        explanation: 'High threshold ensures only broadly supported changes become fundamental law. Prevents temporary majorities from making lasting constitutional changes.'
      },
      {
        title: 'Successful amendments when needed',
        explanation: 'Bill of Rights, Civil War amendments, women\'s suffrage, and voting age reduction show process works for truly necessary changes with widespread support.'
      },
      {
        title: 'Protects minority rights',
        explanation: 'Supermajority requirements prevent majority from easily stripping minority protections. Difficulty protects vulnerable groups from majoritarian tyranny.'
      },
      {
        title: 'Informal adaptation works',
        explanation: 'Constitutional interpretation, custom, and practice allow adaptation without formal amendment. Constitution has evolved significantly through judicial review.'
      }
    ],
    synoptic_links: [
      'Compare with UK constitutional flexibility and sovereignty of Parliament',
      'Link to originalism vs living constitution debate',
      'Connect to structural approach on institutional design'
    ],
    examples: [
      {
        title: 'Equal Rights Amendment',
        context: 'Despite majority support, ERA failed to achieve ratification by required 38 states within deadline, demonstrating process difficulty.'
      },
      {
        title: 'Balanced Budget Amendment',
        context: 'Repeatedly proposed but never achieved two-thirds congressional support despite popular backing, showing how minority can block change.'
      }
    ],
    pitfalls: [
      'Consider both stability benefits and democratic costs of difficulty',
      'Avoid assuming all proposed amendments should have passed',
      'Reference specific amendment attempts and their outcomes'
    ]
  },
  {
    id: 'ma43',
    question_id: 'q43',
    arguments_for: [
      {
        title: 'Significant legislative output',
        explanation: 'Congress passes major legislation including Infrastructure Investment and Jobs Act (2021), CHIPS Act (2022), and Inflation Reduction Act (2022), demonstrating continued legislative capacity.'
      },
      {
        title: 'Committee expertise',
        explanation: 'Standing committees develop policy expertise and conduct detailed scrutiny. Armed Services, Judiciary, and Finance committees shape major policy areas effectively.'
      },
      {
        title: 'Representation function',
        explanation: 'Members represent constituents through casework, securing federal funding, and responding to local concerns. Incumbency advantage (over 90% re-election) suggests constituent satisfaction.'
      },
      {
        title: 'Constitutional powers used',
        explanation: 'Congress exercises power of the purse, declares war powers resolutions, and confirms appointments. Senate confirmation hearings scrutinise executive and judicial nominees.'
      }
    ],
    arguments_against: [
      {
        title: 'Partisan gridlock',
        explanation: 'Increasing polarisation has reduced bipartisan cooperation. Government shutdowns, debt ceiling crises, and failure to pass immigration reform demonstrate dysfunction.'
      },
      {
        title: 'Filibuster obstruction',
        explanation: 'Senate filibuster requiring 60 votes blocks most major legislation. Routine use has transformed it from rare tactic to standard obstruction tool.'
      },
      {
        title: 'Executive dominance',
        explanation: 'Presidents increasingly use executive orders to bypass Congress. Obama, Trump, and Biden all relied heavily on executive action due to legislative gridlock.'
      },
      {
        title: 'Special interest influence',
        explanation: 'Campaign finance dependence on PACs and Super PACs means Congress often serves donor interests over constituent needs. Citizens United expanded corporate influence.'
      }
    ],
    synoptic_links: [
      'Compare with UK Parliament - party discipline vs independence',
      'Link to rational choice theory explaining member behaviour',
      'Connect to debates about congressional reform'
    ],
    examples: [
      {
        title: 'Infrastructure Investment and Jobs Act (2021)',
        context: 'Bipartisan passage of $1.2 trillion infrastructure bill showed Congress can still legislate on major issues when political will exists.'
      },
      {
        title: 'Immigration reform failure',
        context: 'Despite bipartisan support, comprehensive immigration reform has failed repeatedly since 2006, demonstrating legislative dysfunction on contentious issues.'
      }
    ],
    pitfalls: [
      'Avoid focusing only on gridlock without acknowledging legislative successes',
      'Consider difference between House and Senate effectiveness',
      'Reference specific legislation and votes, not just generalisations'
    ]
  },
  {
    id: 'ma44',
    question_id: 'q44',
    arguments_for: [
      {
        title: 'Impeachment power',
        explanation: 'Congress has impeached presidents (Clinton 1998, Trump 2019 and 2021), demonstrating willingness to hold executives accountable for misconduct.'
      },
      {
        title: 'Congressional investigations',
        explanation: 'Select committees investigate executive actions - January 6th Committee, Benghazi hearings, and oversight of COVID response demonstrate scrutiny function.'
      },
      {
        title: 'Confirmation process',
        explanation: 'Senate confirmation hearings scrutinise cabinet and judicial nominees. Rejection of nominees like Robert Bork shows real accountability.'
      },
      {
        title: 'Power of the purse',
        explanation: 'Congress controls appropriations and can defund executive priorities. Government shutdowns show Congress willing to use fiscal leverage.'
      }
    ],
    arguments_against: [
      {
        title: 'Partisan protection',
        explanation: 'Party loyalty prevents accountability when president\'s party controls Congress. Trump impeachment acquittals despite evidence showed partisan limits.'
      },
      {
        title: 'Executive privilege claims',
        explanation: 'Presidents invoke executive privilege to block testimony and documents. Trump administration officials refused congressional subpoenas with limited consequences.'
      },
      {
        title: 'War powers erosion',
        explanation: 'Despite War Powers Resolution (1973), presidents conduct military operations without congressional approval. Syria strikes, drone warfare proceed without declarations.'
      },
      {
        title: 'Information asymmetry',
        explanation: 'Executive branch controls information flow. Intelligence agencies, diplomatic communications, and military operations limit congressional knowledge.'
      }
    ],
    synoptic_links: [
      'Compare with UK Parliament\'s scrutiny of Prime Minister',
      'Link to separation of powers vs fusion of powers debate',
      'Connect to imperial presidency thesis'
    ],
    examples: [
      {
        title: 'January 6th Committee',
        context: 'Select committee conducted extensive investigation into Capitol attack, issued subpoenas, and referred Trump for prosecution - showing oversight capability.'
      },
      {
        title: 'Trump impeachment acquittals',
        context: 'Despite compelling evidence in both impeachments, partisan voting ensured acquittal, questioning effectiveness of ultimate accountability mechanism.'
      }
    ],
    pitfalls: [
      'Distinguish between formal powers and practical effectiveness',
      'Consider role of divided vs unified government',
      'Reference specific oversight examples, not just theoretical powers'
    ]
  },
  {
    id: 'ma45',
    question_id: 'q45',
    arguments_for: [
      {
        title: 'Legislative gridlock',
        explanation: 'Partisan polarisation has reduced bipartisan bills from majority to minority of legislation. Major issues like immigration, gun control, and climate remain unaddressed.'
      },
      {
        title: 'Government shutdowns',
        explanation: 'Partisan standoffs have caused multiple government shutdowns (2013, 2018-19). Basic function of passing budgets has become partisan battleground.'
      },
      {
        title: 'Confirmation obstruction',
        explanation: 'Merrick Garland nomination blocked for 293 days. Judicial confirmation has become partisan warfare, with filibuster eliminated for all nominations.'
      },
      {
        title: 'Disappearing moderates',
        explanation: 'Ideological sorting means few centrists remain. Primary system rewards extremism, and cross-party voting has dramatically declined since 1990s.'
      }
    ],
    arguments_against: [
      {
        title: 'Bipartisan achievements persist',
        explanation: 'Infrastructure Act (2021), CHIPS Act (2022), and gun safety legislation (2022) passed with bipartisan support, showing cooperation remains possible.'
      },
      {
        title: 'Partisanship reflects voters',
        explanation: 'Congress mirrors increasingly polarised electorate. Members representing their constituents accurately is democratic representation, not dysfunction.'
      },
      {
        title: 'Structural not partisan causes',
        explanation: 'Filibuster, committee system, and constitutional design create gridlock regardless of partisanship. Dysfunction reflects institutional design, not party behaviour.'
      },
      {
        title: 'Historical perspective',
        explanation: 'Partisan conflict is not new - 1850s, 1960s, and other eras saw intense division. Current polarisation may be cyclical rather than permanent dysfunction.'
      }
    ],
    synoptic_links: [
      'Compare with UK party discipline and whip system',
      'Link to cultural approach explaining partisan sorting',
      'Connect to debates about congressional reform proposals'
    ],
    examples: [
      {
        title: 'Debt ceiling crises',
        context: 'Routine debt ceiling increases became partisan hostage situations, with 2011 crisis causing credit downgrade and 2023 requiring last-minute deal.'
      },
      {
        title: 'Bipartisan Safer Communities Act (2022)',
        context: 'First major gun legislation in decades passed with bipartisan support after Uvalde shooting, showing crisis can overcome partisan division.'
      }
    ],
    pitfalls: [
      'Avoid assuming all partisanship is negative',
      'Consider whether gridlock might sometimes be constitutional design working',
      'Distinguish between polarisation and partisanship'
    ]
  },
  {
    id: 'ma46',
    question_id: 'q46',
    arguments_for: [
      {
        title: 'Commander-in-Chief powers',
        explanation: 'President controls largest military in history with nuclear arsenal. Ability to order strikes, deploy troops, and conduct covert operations demonstrates global military dominance.'
      },
      {
        title: 'Economic influence',
        explanation: 'US remains world\'s largest economy. Presidential decisions on trade, sanctions, and economic policy have global ripple effects. Dollar remains world reserve currency.'
      },
      {
        title: 'Diplomatic leadership',
        explanation: 'President leads NATO, shapes UN policy, and conducts summit diplomacy. Biden\'s leadership of Ukraine response demonstrated continued alliance leadership.'
      },
      {
        title: 'Soft power resources',
        explanation: 'American cultural influence, technology leadership, and university system give president unique soft power resources unavailable to other leaders.'
      }
    ],
    arguments_against: [
      {
        title: 'Domestic constraints',
        explanation: 'President faces checks from Congress, courts, and federalism that other leaders avoid. Parliamentary systems like UK allow PM more domestic control.'
      },
      {
        title: 'Rising China challenge',
        explanation: 'China\'s economic growth, military expansion, and Belt and Road Initiative challenge US dominance. Xi Jinping may have more centralised power domestically.'
      },
      {
        title: 'Relative decline',
        explanation: 'US share of global GDP has declined from post-WWII heights. Other powers - EU, China, India - have grown relatively stronger.'
      },
      {
        title: 'Limits of hard power',
        explanation: 'Afghanistan withdrawal, Iraq difficulties, and inability to prevent Russian invasion of Ukraine show limits of American military power to achieve objectives.'
      }
    ],
    synoptic_links: [
      'Compare with UK PM powers domestically',
      'Link to debates about imperial presidency',
      'Connect to structural vs cultural explanations of power'
    ],
    examples: [
      {
        title: 'Ukraine response',
        context: 'Biden coordinated Western sanctions and military aid, demonstrating continued alliance leadership, though unable to prevent invasion.'
      },
      {
        title: 'Afghanistan withdrawal',
        context: 'Chaotic 2021 withdrawal showed limits of presidential power to achieve foreign policy objectives despite military dominance.'
      }
    ],
    pitfalls: [
      'Distinguish between formal powers and practical influence',
      'Consider both domestic and international dimensions of power',
      'Avoid conflating US power with presidential power'
    ]
  },
  {
    id: 'ma47',
    question_id: 'q47',
    arguments_for: [
      {
        title: 'Executive order expansion',
        explanation: 'Presidents increasingly govern through executive orders, bypassing Congress. Obama\'s DACA, Trump\'s travel ban, and Biden\'s vaccine mandates show unilateral power expansion.'
      },
      {
        title: 'War powers accumulation',
        explanation: 'Presidents conduct military operations without congressional declaration. Drone strikes, Syria intervention, and special operations proceed under broad authorisations.'
      },
      {
        title: 'Emergency powers',
        explanation: 'National emergencies declared for border wall funding, COVID response, and other purposes expand presidential authority with limited oversight.'
      },
      {
        title: 'Imperial presidency thesis',
        explanation: 'Arthur Schlesinger\'s concept remains relevant. Presidential signing statements, executive privilege claims, and resistance to oversight suggest imperial tendencies.'
      }
    ],
    arguments_against: [
      {
        title: 'Congressional constraints',
        explanation: 'Congress controls appropriations, can override vetoes, and conducts oversight. Government shutdowns and debt ceiling fights show congressional leverage.'
      },
      {
        title: 'Judicial review limits',
        explanation: 'Supreme Court has struck down executive actions - Trump travel ban initially blocked, Biden vaccine mandate limited, DACA protected from termination.'
      },
      {
        title: 'Imperilled presidency argument',
        explanation: 'Presidents face 24/7 media scrutiny, partisan opposition, and scandal vulnerability. Ford, Carter, and arguably Trump were weakened rather than imperial.'
      },
      {
        title: 'Federalism constraints',
        explanation: 'States resist federal policy through lawsuits, sanctuary policies, and independent action. Presidential domestic power limited by state sovereignty.'
      }
    ],
    synoptic_links: [
      'Compare with UK PM power and parliamentary accountability',
      'Link to constitutional debates about executive power',
      'Connect to rational choice theory on institutional constraints'
    ],
    examples: [
      {
        title: 'Biden vaccine mandate',
        context: 'OSHA mandate for large employers struck down by Supreme Court, showing judicial limits on executive power even during emergency.'
      },
      {
        title: 'Trump border wall emergency',
        context: 'National emergency declaration to redirect military funds for border wall faced legal challenges and congressional opposition, partially succeeding.'
      }
    ],
    pitfalls: [
      'Avoid treating all presidents as equally powerful',
      'Consider cyclical nature of presidential power',
      'Reference specific examples from presidents since 1992'
    ]
  },
  {
    id: 'ma48',
    question_id: 'q48',
    arguments_for: [
      {
        title: 'Unified vs divided government',
        explanation: 'Presidents with congressional majorities (Obama 2009-10, Trump 2017-18) achieve more than those facing opposition Congress. Same president can be powerful then constrained.'
      },
      {
        title: 'Public approval fluctuations',
        explanation: 'Presidential persuasion depends on approval ratings. Bush post-9/11 had enormous influence; by 2006 was significantly weakened. Context determines effectiveness.'
      },
      {
        title: 'Crisis opportunities',
        explanation: 'National crises expand presidential power temporarily. FDR in Depression, Bush after 9/11, and presidents during COVID gained authority from emergency context.'
      },
      {
        title: 'Electoral cycle effects',
        explanation: 'First-term presidents with re-election prospects have more influence than lame ducks. Power diminishes predictably over second terms.'
      }
    ],
    arguments_against: [
      {
        title: 'Institutional powers constant',
        explanation: 'Constitutional powers remain same regardless of context. Veto, commander-in-chief, appointment powers exist independent of political circumstances.'
      },
      {
        title: 'Skill matters more than context',
        explanation: 'LBJ achieved Great Society despite Vietnam; Obama achieved ACA despite opposition. Presidential skill in using power matters more than favourable circumstances.'
      },
      {
        title: 'Structural constraints persist',
        explanation: 'Even popular presidents face Supreme Court limits, federalism constraints, and congressional independence. Context cannot overcome institutional checks.'
      },
      {
        title: 'Media environment constant',
        explanation: 'Modern media scrutiny, 24/7 news cycle, and social media create consistent constraint regardless of other contextual factors.'
      }
    ],
    synoptic_links: [
      'Compare with UK PM power variations based on majority size',
      'Link to imperial vs imperilled presidency debate',
      'Connect to rational choice theory on political incentives'
    ],
    examples: [
      {
        title: 'Obama first two years vs last six',
        context: 'Achieved ACA and stimulus with Democratic Congress, then faced gridlock after 2010 midterms, demonstrating context impact on same president.'
      },
      {
        title: 'Bush post-9/11 transformation',
        context: '90% approval enabled Patriot Act and Iraq War authorisation; by 2006 faced Democratic Congress and investigations, showing context volatility.'
      }
    ],
    pitfalls: [
      'Avoid deterministic view that context alone determines outcomes',
      'Consider interaction between context and presidential skill',
      'Reference multiple presidents to show pattern across administrations'
    ]
  },
  {
    id: 'ma49',
    question_id: 'q49',
    arguments_for: [
      {
        title: 'Judicial review power',
        explanation: 'Ability to strike down federal and state laws gives unelected justices enormous policy influence. Dobbs, Citizens United, and Shelby County reshaped major policy areas.'
      },
      {
        title: 'Lifetime tenure',
        explanation: 'Justices serve for decades, outlasting presidents who appointed them. No democratic accountability for decisions affecting millions.'
      },
      {
        title: 'Political appointments',
        explanation: 'Nomination battles like Bork, Thomas, Kavanaugh, and Barrett show appointments are political. Presidents select for ideology, not just qualifications.'
      },
      {
        title: 'Countermajoritarian difficulty',
        explanation: 'Nine unelected justices can override democratic majorities. Overturning Roe despite 60%+ public support demonstrates countermajoritarian power.'
      }
    ],
    arguments_against: [
      {
        title: 'Constitutional duty',
        explanation: 'Judicial review is necessary to uphold Constitution. Marbury v Madison established legitimate role checking unconstitutional government actions.'
      },
      {
        title: 'Limited enforcement',
        explanation: 'Court has "neither sword nor purse" (Hamilton). Depends on executive enforcement and congressional compliance. Cannot implement policy directly.'
      },
      {
        title: 'Checks on the Court',
        explanation: 'Congress can change court size, jurisdiction, and propose amendments. Constitutional amendment can override decisions. Court-packing threat influenced 1937 "switch in time."'
      },
      {
        title: 'Judicial restraint tradition',
        explanation: 'Many justices practice restraint, deferring to elected branches. Stare decisis provides stability. Court often follows rather than leads public opinion.'
      }
    ],
    synoptic_links: [
      'Compare with UK Supreme Court\'s more limited powers',
      'Link to debates about originalism vs living constitution',
      'Connect to structural approach on institutional design'
    ],
    examples: [
      {
        title: 'Dobbs v Jackson (2022)',
        context: 'Overturning 50-year precedent of Roe v Wade demonstrated Court\'s power to reshape major policy area despite public opinion.'
      },
      {
        title: 'Shelby County v Holder (2013)',
        context: 'Striking down Voting Rights Act preclearance provisions showed Court willing to override congressional judgments on ongoing discrimination.'
      }
    ],
    pitfalls: [
      'Avoid treating Court as purely political or purely judicial',
      'Consider different types of cases and levels of deference',
      'Reference specific recent decisions, not just historic ones'
    ]
  },
  {
    id: 'ma50',
    question_id: 'q50',
    arguments_for: [
      {
        title: 'Historic civil rights expansion',
        explanation: 'Brown v Board (1954), Loving v Virginia (1967), and Obergefell v Hodges (2015) demonstrate Court\'s role in expanding rights beyond legislative action.'
      },
      {
        title: 'Bill of Rights enforcement',
        explanation: 'Court has incorporated Bill of Rights against states, protecting free speech, religious liberty, and criminal procedure rights nationwide.'
      },
      {
        title: 'Minority protection',
        explanation: 'Countermajoritarian role allows protection of unpopular minorities. LGBTQ+ rights, religious minorities, and criminal defendants protected against majority tyranny.'
      },
      {
        title: 'Rights floor establishment',
        explanation: 'Court decisions establish minimum rights that states cannot violate. Miranda rights, Gideon right to counsel, and Fourth Amendment protections are universal.'
      }
    ],
    arguments_against: [
      {
        title: 'Rights retrenchment',
        explanation: 'Dobbs ended federal abortion rights. Shelby County gutted Voting Rights Act. Recent Court has narrowed rather than expanded many rights.'
      },
      {
        title: 'Delayed justice',
        explanation: 'Court upheld slavery (Dred Scott), segregation (Plessy), and Japanese internment (Korematsu). Rights protection often comes decades late.'
      },
      {
        title: 'Inconsistent protection',
        explanation: 'Conservative Court protects gun rights and religious liberty while limiting reproductive rights and voting protections. Ideological preferences shape rights protection.'
      },
      {
        title: 'Enforcement limitations',
        explanation: 'Brown v Board took decades to implement. Court cannot ensure rights are protected in practice without executive and legislative support.'
      }
    ],
    synoptic_links: [
      'Compare with UK rights protection through HRA and common law',
      'Link to debates about judicial activism vs restraint',
      'Connect to discussions of civil rights movements'
    ],
    examples: [
      {
        title: 'Obergefell v Hodges (2015)',
        context: 'Establishing constitutional right to same-sex marriage demonstrated Court\'s continued capacity to expand rights against majority opposition in some states.'
      },
      {
        title: 'Students for Fair Admissions v Harvard (2023)',
        context: 'Ending affirmative action in university admissions showed conservative Court willing to narrow civil rights protections.'
      }
    ],
    pitfalls: [
      'Avoid treating Court\'s record as uniformly positive or negative',
      'Consider different rights and how protection varies',
      'Reference recent cases to show current trends'
    ]
  },
  {
    id: 'ma51',
    question_id: 'q51',
    arguments_for: [
      {
        title: 'Extreme politicisation',
        explanation: 'Merrick Garland blocked for 293 days, Barrett confirmed in 30 days before election. Process has become naked power politics rather than evaluation of qualifications.'
      },
      {
        title: 'Confirmation spectacles',
        explanation: 'Thomas, Kavanaugh hearings became partisan circuses with personal attacks. Process deters qualified candidates and damages Court legitimacy.'
      },
      {
        title: 'Ideological litmus tests',
        explanation: 'Presidents openly select for ideology. Trump promised to overturn Roe; nominees evaluated on predicted votes rather than judicial temperament.'
      },
      {
        title: 'Declining bipartisanship',
        explanation: 'Recent nominees confirmed on near party-line votes (Kavanaugh 50-48, Barrett 52-48, Jackson 53-47) compared to historic 90+ vote confirmations.'
      }
    ],
    arguments_against: [
      {
        title: 'Constitutional design',
        explanation: 'Appointment by president with Senate advice and consent is explicit constitutional requirement. Process works as founders intended.'
      },
      {
        title: 'Qualified nominees confirmed',
        explanation: 'Despite controversy, highly qualified justices like Barrett, Gorsuch, and Jackson have been confirmed. Process produces competent jurists.'
      },
      {
        title: 'Senate scrutiny value',
        explanation: 'Public hearings allow examination of judicial philosophy, temperament, and qualifications. Bork rejection showed process can screen out extremists.'
      },
      {
        title: 'Democratic input',
        explanation: 'Electoral consequences for nominations give public indirect voice. Court composition was major issue in 2016 and 2020 elections.'
      }
    ],
    synoptic_links: [
      'Compare with UK Supreme Court appointment via independent commission',
      'Link to debates about Court reform proposals',
      'Connect to structural approach on institutional design effects'
    ],
    examples: [
      {
        title: 'Merrick Garland nomination',
        context: 'McConnell\'s refusal to hold hearings for 293 days fundamentally changed confirmation norms and established new precedent of election-year blocking.'
      },
      {
        title: 'Amy Coney Barrett confirmation',
        context: 'Confirmation 8 days before 2020 election, contradicting 2016 rationale, demonstrated partisan manipulation of process.'
      }
    ],
    pitfalls: [
      'Consider both recent dysfunction and longer historical perspective',
      'Avoid assuming past confirmations were purely merit-based',
      'Evaluate reform proposals critically'
    ]
  },
  {
    id: 'ma52',
    question_id: 'q52',
    arguments_for: [
      {
        title: 'Universal suffrage',
        explanation: 'All adult citizens can vote without property or other qualifications. Voting Rights Act protections, motor voter registration, and early voting expand access.'
      },
      {
        title: 'Competitive elections',
        explanation: 'Regular free elections with peaceful transfers of power. Multiple parties can compete, independents can run, and incumbents can be defeated.'
      },
      {
        title: 'Federalism advantages',
        explanation: 'State control allows experimentation with voting methods. Oregon pioneered mail voting, states vary in primary systems, creating diverse democratic practices.'
      },
      {
        title: 'Direct democracy elements',
        explanation: 'Ballot initiatives, referendums, and recall elections in many states give citizens direct policy voice beyond representative democracy.'
      }
    ],
    arguments_against: [
      {
        title: 'Voter suppression',
        explanation: 'Strict ID laws, purging voter rolls, limiting early voting, and closing polling places disproportionately affect minority voters. Shelby County enabled new restrictions.'
      },
      {
        title: 'Gerrymandering',
        explanation: 'Partisan redistricting creates safe seats and uncompetitive elections. Politicians choose voters rather than voters choosing representatives.'
      },
      {
        title: 'Money in politics',
        explanation: 'Citizens United enabled unlimited spending. Super PACs and dark money give wealthy donors disproportionate influence. Average citizens cannot compete.'
      },
      {
        title: 'Electoral College distortions',
        explanation: 'Winner-take-all system means candidates ignore safe states, popular vote losers can win, and small states have disproportionate influence.'
      }
    ],
    synoptic_links: [
      'Compare with UK electoral system and its democratic critiques',
      'Link to debates about Electoral College reform',
      'Connect to cultural approach on democratic values'
    ],
    examples: [
      {
        title: 'Georgia 2021 voting law',
        context: 'SB 202 restricted drop boxes, limited Sunday voting, and criminalised giving water to voters in line, demonstrating ongoing voter suppression concerns.'
      },
      {
        title: '2020 election',
        context: 'Record turnout despite pandemic showed system can facilitate participation, though subsequent restrictions aimed at reversing gains.'
      }
    ],
    pitfalls: [
      'Avoid treating US democracy as purely positive or negative',
      'Consider variation across states in democratic quality',
      'Reference specific recent laws and court cases'
    ]
  },
  {
    id: 'ma53',
    question_id: 'q53',
    arguments_for: [
      {
        title: 'Popular vote losers can win',
        explanation: 'Trump 2016 and Bush 2000 won presidency while losing popular vote by millions. This undermines basic democratic principle that majority should govern.'
      },
      {
        title: 'Swing state focus',
        explanation: 'Candidates ignore safe states and campaign only in battlegrounds. Voters in California and Texas effectively irrelevant to outcome.'
      },
      {
        title: 'Faithless elector risk',
        explanation: 'Electors can theoretically vote against state results. While rare, 2016 saw seven faithless electors, creating uncertainty.'
      },
      {
        title: 'Outdated compromise',
        explanation: 'Created to balance slave states and protect against mob rule in era without mass communication. Original rationales no longer apply.'
      }
    ],
    arguments_against: [
      {
        title: 'Federalism preservation',
        explanation: 'Electoral College ensures states remain relevant units in presidential selection. Reflects federal nature of union, not just national majority.'
      },
      {
        title: 'Coalition building required',
        explanation: 'Candidates must build geographically diverse coalitions, not just run up margins in population centres. Encourages broad national appeal.'
      },
      {
        title: 'Clear winners produced',
        explanation: 'Electoral College magnifies margins, producing clear mandates. Popular vote might require runoffs or produce plurality winners with minority support.'
      },
      {
        title: 'Practical difficulties of abolition',
        explanation: 'Constitutional amendment requires 38 states, including small states that benefit from current system. National Popular Vote Interstate Compact faces legal challenges.'
      }
    ],
    synoptic_links: [
      'Compare with UK FPTP and its disproportionality',
      'Link to debates about federalism and state power',
      'Connect to structural approach on institutional effects'
    ],
    examples: [
      {
        title: '2016 election',
        context: 'Trump won Electoral College 304-227 while losing popular vote by 2.9 million, producing president opposed by majority of voters.'
      },
      {
        title: 'National Popular Vote Interstate Compact',
        context: 'States with 205 electoral votes have joined compact to award electors to popular vote winner, showing reform momentum short of constitutional amendment.'
      }
    ],
    pitfalls: [
      'Consider both democratic principle and practical federalism arguments',
      'Avoid assuming abolition would necessarily improve democracy',
      'Reference specific election outcomes and reform proposals'
    ]
  },
  {
    id: 'ma54',
    question_id: 'q54',
    arguments_for: [
      {
        title: 'Stable governance',
        explanation: 'Two-party system produces clear majorities and stable governments compared to multi-party coalition systems. Easier to assign responsibility for policy.'
      },
      {
        title: 'Moderate centre ground',
        explanation: 'Parties must appeal to median voter to win, theoretically pushing toward centrist positions and avoiding extremes.'
      },
      {
        title: 'Clear choice offered',
        explanation: 'Voters can choose between two distinct governing philosophies. Simpler than navigating multiple parties with overlapping positions.'
      },
      {
        title: 'Historical success',
        explanation: 'System has survived 230+ years including civil war, depression, and social upheaval. Longevity suggests fundamental soundness.'
      }
    ],
    arguments_against: [
      {
        title: 'Limited representation',
        explanation: 'Many voters don\'t fit neatly into Democratic or Republican camps. Libertarians, Greens, and independents lack meaningful representation.'
      },
      {
        title: 'Polarisation incentives',
        explanation: 'Primary system rewards extremism within parties. General election voters face choice between candidates selected by partisan minorities.'
      },
      {
        title: 'Barriers to entry',
        explanation: 'Ballot access laws, debate exclusion, and winner-take-all elections make third party success nearly impossible despite significant support.'
      },
      {
        title: 'Negative partisanship',
        explanation: 'Voters increasingly motivated by opposition to other party rather than support for own party. Creates toxic political environment.'
      }
    ],
    synoptic_links: [
      'Compare with UK multi-party evolution and coalition government',
      'Link to debates about electoral system effects on party system',
      'Connect to cultural approach on partisan identification'
    ],
    examples: [
      {
        title: 'Ross Perot 1992',
        context: 'Won 19% of popular vote but zero electoral votes, demonstrating how Electoral College and FPTP exclude third parties from power.'
      },
      {
        title: 'Trump transformation of Republican Party',
        context: 'Hostile takeover of party by outsider candidate showed both system flexibility and dangers of primary-driven polarisation.'
      }
    ],
    pitfalls: [
      'Avoid assuming two-party system is inevitable or unchangeable',
      'Consider both stability benefits and representation costs',
      'Reference recent developments in party polarisation'
    ]
  },
  {
    id: 'ma55',
    question_id: 'q55',
    arguments_for: [
      {
        title: 'Pluralist representation',
        explanation: 'Interest groups represent diverse perspectives not captured by parties. NRA, AARP, NAACP, and environmental groups give voice to specific concerns.'
      },
      {
        title: 'Information provision',
        explanation: 'Groups provide expertise and research to legislators. Industry groups, think tanks, and advocacy organisations help inform policy decisions.'
      },
      {
        title: 'Participation channels',
        explanation: 'Groups offer citizens engagement beyond voting. Membership, donations, and activism allow ongoing democratic participation.'
      },
      {
        title: 'First Amendment protection',
        explanation: 'Right to petition government and associate freely are constitutional protections. Interest group activity is protected democratic expression.'
      }
    ],
    arguments_against: [
      {
        title: 'Unequal influence',
        explanation: 'Wealthy interests like pharmaceutical and oil industries vastly outspend public interest groups. Money translates to access and influence.'
      },
      {
        title: 'Iron triangles',
        explanation: 'Cozy relationships between interest groups, congressional committees, and agencies create policy capture. Public interest subordinated to insider interests.'
      },
      {
        title: 'Revolving door corruption',
        explanation: 'Movement between lobbying, Congress, and executive branch creates conflicts of interest. Regulators often serve industries they supposedly regulate.'
      },
      {
        title: 'Gridlock contribution',
        explanation: 'Interest groups mobilise to block change rather than achieve it. Status quo bias results from multiple veto points captured by defenders of existing policies.'
      }
    ],
    synoptic_links: [
      'Compare with UK pressure group activity and insider/outsider distinction',
      'Link to debates about campaign finance and Citizens United',
      'Connect to rational choice theory on collective action'
    ],
    examples: [
      {
        title: 'NRA influence',
        context: 'Despite 90%+ public support for background checks, NRA lobbying blocked gun legislation for decades, demonstrating interest group power over majority preferences.'
      },
      {
        title: 'Citizens United v FEC (2010)',
        context: 'Ruling enabled unlimited corporate and union spending through Super PACs, dramatically increasing interest group influence in elections.'
      }
    ],
    pitfalls: [
      'Distinguish between different types of interest groups',
      'Consider both elite and grassroots group influence',
      'Avoid blanket condemnation - some groups serve important democratic functions'
    ]
  },
  // Global Politics - Regionalism and the EU
  {
    id: 'ma67',
    question_id: 'q67',
    arguments_for: [
      {
        title: 'Deepest integration achieved',
        explanation: 'EU has achieved unprecedented supranational integration with single market, common currency, Schengen free movement, and shared institutions like European Parliament and Court of Justice.'
      },
      {
        title: 'Peace and stability',
        explanation: 'EU transformed Europe from continent of wars to zone of peace. Franco-German reconciliation and expansion to former communist states shows capacity to integrate diverse nations.'
      },
      {
        title: 'Economic success',
        explanation: 'Single market of 450 million consumers creates world\'s largest trading bloc. Common standards, free movement of goods, services, capital, and people boost prosperity.'
      },
      {
        title: 'Soft power projection',
        explanation: 'EU enlargement process promotes democracy, human rights, and rule of law. Candidate countries reform to meet Copenhagen criteria, extending European values.'
      }
    ],
    arguments_against: [
      {
        title: 'Unique historical circumstances',
        explanation: 'Post-WWII context, US security umbrella, Cold War pressures, and shared Christian democratic traditions made European integration possible. These conditions don\'t exist elsewhere.'
      },
      {
        title: 'Democratic deficit criticisms',
        explanation: 'EU struggles with perceived lack of democratic legitimacy. Commission unelected, Parliament has limited powers, decisions seem remote from citizens. Brexit shows integration can be reversed.'
      },
      {
        title: 'Economic divergence',
        explanation: 'Eurozone crisis exposed structural problems. Greek debt crisis, Italian stagnation, and north-south divide show single currency without fiscal union creates instability.'
      },
      {
        title: 'Other regions lack prerequisites',
        explanation: 'African Union, ASEAN, Mercosur lack EU\'s economic convergence, shared values, institutional capacity, and political will for supranational governance.'
      }
    ],
    synoptic_links: [
      'Compare with realist scepticism about international cooperation',
      'Link to liberal institutionalist arguments about interdependence',
      'Connect to debates about sovereignty and globalisation'
    ],
    examples: [
      {
        title: 'African Union',
        context: 'Modelled on EU but lacks enforcement capacity, with ineffective response to coups in Mali, Sudan, and Guinea despite democratic charter.'
      },
      {
        title: 'ASEAN',
        context: 'Southeast Asian regional body maintains strict non-interference principle, rejecting EU-style supranationalism in favour of consensus-based intergovernmentalism.'
      }
    ],
    pitfalls: [
      'Avoid assuming EU model is universally desirable',
      'Consider specific conditions that enabled European integration',
      'Reference recent challenges to EU cohesion'
    ]
  },
  {
    id: 'ma68',
    question_id: 'q68',
    arguments_for: [
      {
        title: 'Peace achieved',
        explanation: 'Original aim of preventing Franco-German war succeeded completely. No war between member states since founding. Nobel Peace Prize 2012 recognised this achievement.'
      },
      {
        title: 'Economic integration',
        explanation: 'Single market with four freedoms (goods, services, capital, people) created largest integrated economy. Common external tariff and trade policy increased bargaining power.'
      },
      {
        title: 'Successful enlargement',
        explanation: 'Expanded from 6 to 27 members, integrating former communist states and promoting democratic consolidation in Central and Eastern Europe.'
      },
      {
        title: 'Regulatory superpower',
        explanation: 'EU standards on environment, data protection (GDPR), competition, and consumer safety become global benchmarks through "Brussels effect".'
      }
    ],
    arguments_against: [
      {
        title: 'Eurozone structural flaws',
        explanation: 'Common currency without fiscal union created sovereign debt crisis. Greece required multiple bailouts, austerity caused mass unemployment and social hardship.'
      },
      {
        title: 'Migration crisis divisions',
        explanation: '2015 migration crisis exposed deep divisions. Quota system rejected by Eastern members, Schengen temporarily suspended, no common asylum policy achieved.'
      },
      {
        title: 'Democratic backsliding',
        explanation: 'Hungary and Poland undermined rule of law despite EU membership. Article 7 proceedings ineffective, showing limits of conditionality post-accession.'
      },
      {
        title: 'Brexit',
        explanation: 'UK departure showed EU can lose members. Second-largest economy leaving raises questions about integration\'s appeal and sustainability.'
      }
    ],
    synoptic_links: [
      'Compare with functionalist spillover theory',
      'Link to debates about democratic legitimacy in international organisations',
      'Connect to globalisation and sovereignty tensions'
    ],
    examples: [
      {
        title: 'Greek debt crisis',
        context: 'Greek economy contracted 25%, unemployment reached 27%, demonstrating costs of eurozone design flaws and harsh conditionality.'
      },
      {
        title: 'COVID-19 recovery fund',
        context: 'NextGenerationEU €750 billion package showed capacity for solidarity and quasi-fiscal union when faced with common crisis.'
      }
    ],
    pitfalls: [
      'Evaluate different aims separately - success varies by area',
      'Consider both founding aims and evolved objectives',
      'Reference recent crises and responses'
    ]
  },
  {
    id: 'ma69',
    question_id: 'q69',
    arguments_for: [
      {
        title: 'Sovereignty preservation',
        explanation: 'Independent states retain full control over policy, borders, and national identity. Brexit aimed to "take back control" - reflects desire for self-determination.'
      },
      {
        title: 'Policy flexibility',
        explanation: 'Sovereign states can respond quickly to national circumstances. UK could pursue independent vaccine procurement during COVID, unconstrained by EU processes.'
      },
      {
        title: 'Democratic accountability',
        explanation: 'National governments directly accountable to citizens. Regional organisations add layer of governance distant from democratic control.'
      },
      {
        title: 'Avoiding shared burdens',
        explanation: 'Member states can be drawn into others\' problems - eurozone bailouts, migration burden-sharing. Independence avoids these obligations.'
      }
    ],
    arguments_against: [
      {
        title: 'Small state vulnerability',
        explanation: 'Individual states lack bargaining power in global economy. Even large economies like UK finding post-Brexit trade negotiations difficult against larger blocs.'
      },
      {
        title: 'Transnational challenges',
        explanation: 'Climate change, terrorism, pandemics, migration cannot be solved by single states. Regional cooperation essential for effective responses.'
      },
      {
        title: 'Economic benefits of integration',
        explanation: 'Single markets, customs unions, and free trade areas boost growth. Brexit caused trade frictions, supply chain disruption, and reduced investment.'
      },
      {
        title: 'Security cooperation',
        explanation: 'NATO and EU defence cooperation multiply capabilities. Individual states cannot match security benefits of collective defence.'
      }
    ],
    synoptic_links: [
      'Compare realist and liberal views on sovereignty',
      'Link to debates about globalisation and the nation-state',
      'Connect to Brexit and its implications'
    ],
    examples: [
      {
        title: 'Brexit consequences',
        context: 'UK faces trade barriers, reduced financial services access, Northern Ireland protocol tensions - illustrating costs of leaving regional organisation.'
      },
      {
        title: 'Singapore',
        context: 'Small state succeeds through strategic positioning, trade openness, and regional engagement rather than isolation - sovereignty doesn\'t mean autarky.'
      }
    ],
    pitfalls: [
      'Avoid treating sovereignty as absolute or binary',
      'Consider different types of regional organisations',
      'Reference specific cases of success and failure'
    ]
  },
  // Global Politics - Power and World Order
  {
    id: 'ma70',
    question_id: 'q70',
    arguments_for: [
      {
        title: 'Limits of military force',
        explanation: 'US failures in Iraq and Afghanistan show military power cannot achieve political objectives alone. $2 trillion spent in Afghanistan, yet Taliban returned to power.'
      },
      {
        title: 'Rise of non-state actors',
        explanation: 'NGOs, multinational corporations, and social movements influence global politics through ideas and norms rather than coercion. Climate activism, human rights campaigns shape agendas.'
      },
      {
        title: 'Economic interdependence',
        explanation: 'Globalisation makes economic coercion costly - sanctions hurt imposers too. China\'s Belt and Road Initiative uses investment rather than military force to extend influence.'
      },
      {
        title: 'Cultural influence',
        explanation: 'American soft power through Hollywood, universities, technology companies shapes global preferences. Korean Wave (K-pop, K-drama) extends South Korean influence without military expenditure.'
      }
    ],
    arguments_against: [
      {
        title: 'Russia\'s use of hard power',
        explanation: 'Ukraine invasion shows military force remains decisive. Russia willing to use overwhelming force despite economic costs and international condemnation.'
      },
      {
        title: 'China\'s military modernisation',
        explanation: 'China massively expanding military capabilities, building artificial islands in South China Sea, developing aircraft carriers. Relies on hard power alongside economic influence.'
      },
      {
        title: 'Nuclear deterrence',
        explanation: 'Nuclear weapons remain ultimate guarantee of security. North Korea, Iran pursue nuclear capability despite soft power alternatives.'
      },
      {
        title: 'Soft power limitations',
        explanation: 'Cultural attraction doesn\'t translate into policy compliance. Anti-American sentiment persists despite Hollywood dominance. Soft power cannot compel action.'
      }
    ],
    synoptic_links: [
      'Compare realist emphasis on hard power with liberal attention to soft power',
      'Link to Nye\'s concept of smart power combining both',
      'Connect to debates about declining US hegemony'
    ],
    examples: [
      {
        title: 'China\'s Belt and Road Initiative',
        context: 'Infrastructure investment in 140+ countries extends Chinese influence through economic ties rather than military presence, though critics see debt-trap diplomacy.'
      },
      {
        title: 'US cultural dominance',
        context: 'Netflix, Apple, Google shape global culture and communications but couldn\'t prevent anti-American movements or policy opposition.'
      }
    ],
    pitfalls: [
      'Avoid treating soft and hard power as mutually exclusive',
      'Consider context - different situations favour different power types',
      'Reference contemporary examples of both power forms'
    ]
  },
  {
    id: 'ma71',
    question_id: 'q71',
    arguments_for: [
      {
        title: 'Military force decides outcomes',
        explanation: 'Russia\'s Ukraine invasion, US military presence globally, China\'s South China Sea expansion show hard power remains decisive. Territory still conquered by force.'
      },
      {
        title: 'Nuclear deterrence',
        explanation: 'Nuclear weapons remain ultimate security guarantee. Putin\'s nuclear threats constrained Western response to Ukraine invasion. MAD still prevents great power war.'
      },
      {
        title: 'Economic coercion as hard power',
        explanation: 'Sanctions regime against Russia, Iran, North Korea shows economic pressure can be weaponised. Economic warfare is still coercion.'
      },
      {
        title: 'Soft power limitations',
        explanation: 'Cultural attraction doesn\'t prevent conflict. Europe\'s soft power couldn\'t stop Russian aggression. Ideas alone cannot secure territory or deter threats.'
      }
    ],
    arguments_against: [
      {
        title: 'Military failures',
        explanation: 'US defeats in Vietnam, Iraq, Afghanistan show military superiority doesn\'t guarantee victory. Russia\'s Ukraine invasion proving more costly than anticipated.'
      },
      {
        title: 'Legitimacy matters',
        explanation: 'Without soft power legitimacy, hard power faces resistance. US lost hearts and minds in Middle East despite military dominance. Russia isolated diplomatically.'
      },
      {
        title: 'Economic interdependence constraints',
        explanation: 'Globalisation raises costs of conflict. Russia faces severe sanctions, China cautious about Taiwan given economic integration with West.'
      },
      {
        title: 'Non-state actor influence',
        explanation: 'Climate activists, human rights organisations, tech companies shape global politics without military force. Ideas and networks matter.'
      }
    ],
    synoptic_links: [
      'Compare realist and liberal theories on power',
      'Link to debates about US decline and rising powers',
      'Connect to nuclear deterrence and MAD'
    ],
    examples: [
      {
        title: 'Russia-Ukraine War',
        context: 'Russia\'s invasion showed willingness to use massive military force, but also limitations - unable to achieve quick victory, facing Ukrainian resistance and Western support.'
      },
      {
        title: 'China\'s military modernisation',
        context: 'PLA building blue-water navy, developing hypersonic missiles, expanding nuclear arsenal suggests Beijing sees hard power as essential alongside economic influence.'
      }
    ],
    pitfalls: [
      'Consider costs and effectiveness of hard power, not just its use',
      'Avoid assuming hard power always achieves objectives',
      'Reference both successful and failed uses of force'
    ]
  },
  {
    id: 'ma72',
    question_id: 'q72',
    arguments_for: [
      {
        title: 'Rise of China',
        explanation: 'China now world\'s second-largest economy, largest trading nation, expanding military. Challenges US dominance in Asia-Pacific and increasingly globally.'
      },
      {
        title: 'Russian resurgence',
        explanation: 'Russia reasserted great power status through Crimea annexation, Ukraine invasion, Syria intervention. Nuclear arsenal ensures relevance despite economic weakness.'
      },
      {
        title: 'Regional powers rising',
        explanation: 'India, Brazil, Turkey, Saudi Arabia pursuing independent foreign policies. Not aligned with US or China, seeking their own spheres of influence.'
      },
      {
        title: 'US relative decline',
        explanation: 'US share of global GDP declining, military stretched, domestic polarisation limiting foreign policy capacity. No longer able to enforce liberal order alone.'
      }
    ],
    arguments_against: [
      {
        title: 'US still dominant',
        explanation: 'US military spending exceeds next 10 countries combined, dollar remains reserve currency, US tech companies dominate globally. Decline exaggerated.'
      },
      {
        title: 'China faces constraints',
        explanation: 'Demographic decline, debt burden, tech restrictions, hostile neighbours limit Chinese rise. May not surpass US as predicted.'
      },
      {
        title: 'Bipolarity emerging',
        explanation: 'US-China competition increasingly defines global politics. Other powers forced to choose sides or balance between them. Not true multipolarity.'
      },
      {
        title: 'Liberal order persists',
        explanation: 'WTO, IMF, UN still function despite challenges. US alliance network in Europe and Asia-Pacific remains strong. Revisionist powers haven\'t created alternative.'
      }
    ],
    synoptic_links: [
      'Compare unipolar, bipolar, and multipolar system theories',
      'Link to debates about hegemonic stability',
      'Connect to power transition theory'
    ],
    examples: [
      {
        title: 'BRICS expansion',
        context: 'BRICS adding Saudi Arabia, Iran, UAE, Egypt, Ethiopia suggests emerging multipolar coalition, though coherence and effectiveness uncertain.'
      },
      {
        title: 'Ukraine War alignments',
        context: 'Many Global South countries refused to condemn Russia or join sanctions, showing limits of Western influence and multipolar tendencies.'
      }
    ],
    pitfalls: [
      'Define multipolarity clearly - how many poles, what criteria',
      'Consider whether change is structural or cyclical',
      'Avoid assuming inevitable decline or rise of any power'
    ]
  },
  // Global Politics - Global Governance
  {
    id: 'ma73',
    question_id: 'q73',
    arguments_for: [
      {
        title: 'Structural adjustment damage',
        explanation: 'IMF conditions requiring privatisation, spending cuts, and liberalisation caused social devastation. Latin American "lost decade", African economic decline in 1980s-90s.'
      },
      {
        title: 'Sovereignty undermined',
        explanation: 'Conditionality imposes policies regardless of democratic choices. Elected governments forced to implement unpopular reforms or lose access to finance.'
      },
      {
        title: 'Perpetuating inequality',
        explanation: 'Institutions reflect Western dominance - US and Europe control voting shares, leadership always American/European. Developing countries lack voice.'
      },
      {
        title: 'Debt dependency',
        explanation: 'Loans create ongoing debt burden. Countries remain trapped in cycles of borrowing and austerity. Zambia, Sri Lanka recent debt crises show pattern continues.'
      }
    ],
    arguments_against: [
      {
        title: 'Crisis stabilisation',
        explanation: 'IMF provides essential liquidity during balance of payments crises. Asian financial crisis 1997, Global Financial Crisis 2008 required coordinated response.'
      },
      {
        title: 'Development financing',
        explanation: 'World Bank funds infrastructure, education, health projects that private markets won\'t finance. Billions lifted from poverty with Bank support.'
      },
      {
        title: 'Reform and learning',
        explanation: 'Both institutions evolved - less harsh conditionality, more poverty focus, greater attention to social impact. PRSP approach involves recipient countries.'
      },
      {
        title: 'Alternative worse',
        explanation: 'Without international financial institutions, countries would face harsher private market terms or no access to finance at all during crises.'
      }
    ],
    synoptic_links: [
      'Compare with dependency theory and world systems theory',
      'Link to debates about economic globalisation',
      'Connect to global governance reform proposals'
    ],
    examples: [
      {
        title: 'Greece bailout',
        context: 'IMF-EU-ECB troika imposed severe austerity causing 25% GDP decline, 27% unemployment - structural adjustment applied to European country.'
      },
      {
        title: 'Asian financial crisis 1997',
        context: 'IMF conditions in Indonesia, Thailand, South Korea criticised for deepening crisis and imposing inappropriate policies.'
      }
    ],
    pitfalls: [
      'Distinguish between IMF and World Bank roles',
      'Consider both historical record and recent reforms',
      'Avoid blanket condemnation - some programmes succeeded'
    ]
  },
  {
    id: 'ma74',
    question_id: 'q74',
    arguments_for: [
      {
        title: 'P5 anachronism',
        explanation: 'Permanent members reflect 1945 power distribution. Japan, Germany, India, Brazil larger economies than UK/France. No African or Latin American permanent member.'
      },
      {
        title: 'Veto paralysis',
        explanation: 'P5 veto blocks action on major conflicts. Russia vetoed Syria resolutions 16+ times. China and Russia protect each other from criticism. Council cannot act on great power interests.'
      },
      {
        title: 'Legitimacy deficit',
        explanation: 'Unrepresentative Council lacks global legitimacy. Decisions seen as great power diktat rather than international community consensus.'
      },
      {
        title: 'Failure to prevent conflicts',
        explanation: 'Council failed in Rwanda genocide, Syria civil war, Yemen crisis, Ukraine invasion. Core purpose of maintaining peace not achieved.'
      }
    ],
    arguments_against: [
      {
        title: 'Great power buy-in essential',
        explanation: 'Without P5 support, UN has no enforcement capacity. Council that excluded major powers would be ignored. League of Nations failed without US.'
      },
      {
        title: 'Reform impractical',
        explanation: 'P5 must agree to Charter amendments reducing their power. No incentive to do so. All reform proposals have failed for decades.'
      },
      {
        title: 'Some successes',
        explanation: 'Council authorised interventions in Korea, Gulf War, Libya. Peacekeeping operations, sanctions regimes show capacity to act when P5 agree.'
      },
      {
        title: 'Alternative worse',
        explanation: 'Without Security Council, unilateral action more likely. Council provides forum for dialogue even when action blocked.'
      }
    ],
    synoptic_links: [
      'Compare with League of Nations failure',
      'Link to debates about global governance effectiveness',
      'Connect to great power politics and realist theory'
    ],
    examples: [
      {
        title: 'Syria vetoes',
        context: 'Russia and China vetoed 16+ resolutions on Syria since 2011, blocking action while hundreds of thousands died. Exemplifies veto problem.'
      },
      {
        title: 'G4 reform proposal',
        context: 'Germany, Japan, India, Brazil sought permanent seats for decades. P5 resistance and regional rivalries (Pakistan vs India, Italy vs Germany) blocked progress.'
      }
    ],
    pitfalls: [
      'Consider what reform is achievable, not just desirable',
      'Evaluate Council against realistic alternatives',
      'Reference specific cases of success and failure'
    ]
  },
  {
    id: 'ma75',
    question_id: 'q75',
    arguments_for: [
      {
        title: 'International institutions strengthened',
        explanation: 'Globalisation increased demand for coordination - WTO, IMF, World Bank, climate agreements, health regulations. More issues require global governance.'
      },
      {
        title: 'Non-state actor participation',
        explanation: 'NGOs, civil society, business now participate in global governance. Multi-stakeholder approach includes more voices than traditional state-centric diplomacy.'
      },
      {
        title: 'Information sharing',
        explanation: 'Globalised communications enable real-time coordination. WHO pandemic responses, climate monitoring, financial regulation benefit from instant global information flows.'
      },
      {
        title: 'Norm diffusion',
        explanation: 'Human rights, environmental standards, anti-corruption norms spread through globalisation. International standards become domestic expectations.'
      }
    ],
    arguments_against: [
      {
        title: 'Accountability gaps',
        explanation: 'Globalisation outpaced governance capacity. Tax havens, regulatory arbitrage, transnational crime exploit governance gaps. Race to bottom in standards.'
      },
      {
        title: 'Democratic deficit',
        explanation: 'Global governance institutions lack democratic legitimacy. Technocratic decision-making distant from citizens. Decisions affect people who have no voice.'
      },
      {
        title: 'Inequality reinforced',
        explanation: 'Global governance reflects power asymmetries. WTO rules favour developed countries, IMF voting dominated by rich nations. Globalisation governance serves powerful.'
      },
      {
        title: 'Backlash and fragmentation',
        explanation: 'Brexit, Trump\'s withdrawal from Paris Agreement and WHO show backlash against global governance. Rising nationalism challenges multilateral cooperation.'
      }
    ],
    synoptic_links: [
      'Compare liberal institutionalist optimism with realist scepticism',
      'Link to debates about sovereignty erosion',
      'Connect to democratic deficit in international organisations'
    ],
    examples: [
      {
        title: 'COVID-19 pandemic response',
        context: 'WHO coordination failed initially - vaccine nationalism, travel ban chaos, origins investigation blocked. Showed limits of global health governance.'
      },
      {
        title: 'Paris Climate Agreement',
        context: 'Near-universal participation but voluntary commitments insufficient for 1.5°C target. Shows both potential and limits of global governance.'
      }
    ],
    pitfalls: [
      'Distinguish between different areas of global governance',
      'Consider both quantitative growth and qualitative effectiveness',
      'Reference specific successes and failures'
    ]
  },
  // Global Politics - Sovereignty and Globalisation
  {
    id: 'ma76',
    question_id: 'q76',
    arguments_for: [
      {
        title: 'Economic sovereignty eroded',
        explanation: 'States cannot control capital flows, must compete for investment, bound by WTO rules and trade agreements. Market discipline constrains policy choices.'
      },
      {
        title: 'Supranational governance',
        explanation: 'EU, international courts, human rights treaties create legal obligations overriding domestic law. States bound by rules they cannot unilaterally change.'
      },
      {
        title: 'Non-state actor power',
        explanation: 'Multinational corporations, NGOs, international organisations exercise influence rivalling states. Big tech, finance, civil society limit state autonomy.'
      },
      {
        title: 'Transnational challenges',
        explanation: 'Climate change, pandemics, terrorism, cyber threats cannot be addressed by single states. Interdependence requires pooled sovereignty.'
      }
    ],
    arguments_against: [
      {
        title: 'States remain central actors',
        explanation: 'States still monopolise legitimate force, control borders, make war and peace. COVID showed states reasserting control - border closures, national policies.'
      },
      {
        title: 'Sovereignty voluntarily pooled',
        explanation: 'International agreements are state choices. Brexit shows states can exit. WTO, EU membership are decisions, not impositions.'
      },
      {
        title: 'Strong states adapt',
        explanation: 'Powerful states shape globalisation rules. US, China, EU set standards others follow. Globalisation reflects state power, doesn\'t eliminate it.'
      },
      {
        title: 'Nationalist backlash',
        explanation: 'Trump, Brexit, Modi, Orbán show sovereignty reassertion. States choosing nationalist policies, withdrawing from international commitments.'
      }
    ],
    synoptic_links: [
      'Compare realist defence of sovereignty with liberal/cosmopolitan critiques',
      'Link to debates about the nation-state\'s future',
      'Connect to EU and regional integration'
    ],
    examples: [
      {
        title: 'Brexit',
        context: 'UK decision to leave EU reasserted parliamentary sovereignty, though revealed economic costs of reversing integration.'
      },
      {
        title: 'COVID-19 border controls',
        context: 'Pandemic saw states close borders, ban exports of medical supplies, pursue national vaccine policies - sovereignty reasserted in crisis.'
      }
    ],
    pitfalls: [
      'Define sovereignty carefully - legal vs practical, internal vs external',
      'Avoid treating globalisation as irresistible force',
      'Consider variation across states and issue areas'
    ]
  },
  {
    id: 'ma77',
    question_id: 'q77',
    arguments_for: [
      {
        title: 'Billion lifted from poverty',
        explanation: 'World Bank data: over 1 billion people escaped extreme poverty since 1990. China\'s integration into global economy lifted hundreds of millions. East Asian miracle.'
      },
      {
        title: 'Access to markets',
        explanation: 'Export-led growth strategy enabled development. Bangladesh garments, Vietnam electronics, India IT services - globalisation provided markets for developing country products.'
      },
      {
        title: 'Technology transfer',
        explanation: 'Foreign direct investment brings technology, skills, management practices. Global supply chains diffuse innovation to developing countries.'
      },
      {
        title: 'Consumer benefits',
        explanation: 'Cheaper goods improve living standards. Mobile phones, medicines, consumer goods accessible to previously excluded populations through global trade.'
      }
    ],
    arguments_against: [
      {
        title: 'Inequality increased',
        explanation: 'Gap between rich and poor countries and within countries has grown. Top 1% captured disproportionate share of globalisation gains. Oxfam inequality reports.'
      },
      {
        title: 'Race to bottom',
        explanation: 'Competition for investment drives down wages, environmental standards, tax rates. Workers exploited in sweatshops, communities polluted, governments starved of revenue.'
      },
      {
        title: 'Dependency created',
        explanation: 'Developing countries locked into primary commodity exports, vulnerable to price shocks. Value captured by developed country corporations, not local producers.'
      },
      {
        title: 'Structural adjustment harm',
        explanation: 'IMF/World Bank conditions damaged social services, removed food subsidies, caused unemployment. Latin American "lost decade", African decline.'
      }
    ],
    synoptic_links: [
      'Compare with dependency theory and modernisation theory',
      'Link to debates about Washington Consensus',
      'Connect to sustainable development goals'
    ],
    examples: [
      {
        title: 'China\'s development',
        context: 'WTO membership 2001 accelerated export-led growth, lifting 800+ million from poverty - globalisation\'s greatest success story, though with significant inequality.'
      },
      {
        title: 'Bangladesh garment industry',
        context: '4 million workers, mostly women, earn livelihoods but Rana Plaza collapse (2013) exposed dangerous conditions and exploitation in global supply chains.'
      }
    ],
    pitfalls: [
      'Define poverty carefully - absolute vs relative, different measures',
      'Consider distribution of gains, not just aggregate growth',
      'Reference specific country experiences'
    ]
  },
  {
    id: 'ma78',
    question_id: 'q78',
    arguments_for: [
      {
        title: 'Economic sovereignty lost',
        explanation: 'Capital mobility, trade rules, supply chains constrain policy. States cannot unilaterally set exchange rates, tariffs, regulations without market punishment.'
      },
      {
        title: 'Supranational governance',
        explanation: 'EU, WTO, IMF, international courts make binding decisions. Human rights, trade, environment increasingly governed above state level.'
      },
      {
        title: 'Non-state power',
        explanation: 'Apple revenue exceeds most countries\' GDP. Tech platforms, financial institutions, NGOs exercise power across borders that states cannot control.'
      },
      {
        title: 'Transnational identities',
        explanation: 'Diasporas, global civil society, professional networks create loyalties beyond nation-state. Cosmopolitan identities challenge national citizenship.'
      }
    ],
    arguments_against: [
      {
        title: 'States still sovereign',
        explanation: 'States control borders, make laws, command militaries, collect taxes. Core functions of statehood unchanged. 193 UN members, more than ever before.'
      },
      {
        title: 'Nationalist resurgence',
        explanation: 'Brexit, Trump, Modi, Orbán show nation-state remains primary political identity. Globalisation produced nationalist backlash, not its transcendence.'
      },
      {
        title: 'COVID proved state relevance',
        explanation: 'Pandemic response was national - border closures, lockdowns, vaccination programmes. States reasserted control when crisis demanded.'
      },
      {
        title: 'War remains state activity',
        explanation: 'Ukraine invasion conducted by states with national armies. Security, the core state function, unchanged by globalisation.'
      }
    ],
    synoptic_links: [
      'Compare hyperglobalist, sceptic, and transformationalist positions',
      'Link to debates about cosmopolitanism vs communitarianism',
      'Connect to sovereignty and intervention debates'
    ],
    examples: [
      {
        title: 'Nationalism in 2020s',
        context: 'Far-right parties gaining across Europe, India\'s Hindu nationalism, America First - nation-state identity resurgent not declining.'
      },
      {
        title: 'Russia-Ukraine War',
        context: 'Classic interstate war over territory and sovereignty. Great power competition very much state-centric activity.'
      }
    ],
    pitfalls: [
      'Distinguish between different dimensions of state power',
      'Avoid hyperglobalist assumptions about state decline',
      'Consider both economic and security dimensions'
    ]
  },
  // Global Politics - Human Rights
  {
    id: 'ma79',
    question_id: 'q79',
    arguments_for: [
      {
        title: 'Normative framework established',
        explanation: 'UDHR, ICCPR, ICESCR, specialist conventions created comprehensive human rights standards. Near-universal ratification of core treaties.'
      },
      {
        title: 'Monitoring mechanisms',
        explanation: 'UN Human Rights Council, treaty bodies, special rapporteurs monitor compliance. Naming and shaming creates reputational costs for violators.'
      },
      {
        title: 'Regional systems effective',
        explanation: 'European Court of Human Rights enforces judgments, Inter-American system protects rights in Americas. Regional mechanisms add enforcement layer.'
      },
      {
        title: 'Civil society empowerment',
        explanation: 'International standards provide tools for domestic activists. Amnesty International, Human Rights Watch, local NGOs use global framework to pressure governments.'
      }
    ],
    arguments_against: [
      {
        title: 'Enforcement weak',
        explanation: 'No global enforcement mechanism. Security Council selective and veto-blocked. States violate rights with impunity - China, North Korea, Syria face no real consequences.'
      },
      {
        title: 'Cultural imperialism critique',
        explanation: 'Western-origin rights challenged as imposing foreign values. Asian values debate, Islamic perspectives question universal applicability.'
      },
      {
        title: 'Great power hypocrisy',
        explanation: 'US uses human rights selectively, exempts allies like Saudi Arabia, refuses ICC jurisdiction. Rights weaponised for geopolitical purposes.'
      },
      {
        title: 'Ongoing mass atrocities',
        explanation: 'Uyghur detention, Rohingya genocide, Yemen humanitarian crisis continue despite global governance. System fails when most needed.'
      }
    ],
    synoptic_links: [
      'Compare universalist and relativist positions on human rights',
      'Link to debates about humanitarian intervention',
      'Connect to R2P and sovereignty'
    ],
    examples: [
      {
        title: 'European Court of Human Rights',
        context: 'ECHR delivered 25,000+ judgments, states generally comply, individuals have effective remedy - regional system that works.'
      },
      {
        title: 'Uyghur situation',
        context: 'Despite UN reports of possible crimes against humanity, China faces no consequences. Demonstrates global governance failure on human rights.'
      }
    ],
    pitfalls: [
      'Distinguish between standard-setting and enforcement',
      'Consider regional variation in effectiveness',
      'Avoid both naive optimism and complete cynicism'
    ]
  },
  {
    id: 'ma80',
    question_id: 'q80',
    arguments_for: [
      {
        title: 'Moral imperative',
        explanation: 'Genocide and mass atrocities cannot be ignored due to sovereignty. Rwanda showed cost of inaction - 800,000 dead while world watched. Duty to protect innocent.'
      },
      {
        title: 'R2P norm established',
        explanation: '2005 World Summit endorsed Responsibility to Protect. When states fail to protect populations from genocide, war crimes, ethnic cleansing, crimes against humanity, international community has responsibility to act.'
      },
      {
        title: 'Successful interventions',
        explanation: 'Kosovo intervention stopped ethnic cleansing. Libya 2011 protected Benghazi from imminent massacre. East Timor independence achieved through international intervention.'
      },
      {
        title: 'Rights trump sovereignty',
        explanation: 'Sovereignty is responsibility, not license for abuse. States forfeits sovereign protection when committing atrocities against own population.'
      }
    ],
    arguments_against: [
      {
        title: 'Selective application',
        explanation: 'Intervention in Libya but not Syria, Rwanda ignored, Yemen bombing by allies. Double standards undermine legitimacy. Geopolitics trumps humanitarianism.'
      },
      {
        title: 'Unintended consequences',
        explanation: 'Libya intervention led to state collapse, refugee crisis, regional instability. Iraq justified on humanitarian grounds created worse humanitarian situation.'
      },
      {
        title: 'Sovereignty violation',
        explanation: 'International law rests on sovereign equality. Intervention without Security Council authorisation violates UN Charter. Creates precedent for abuse by powerful states.'
      },
      {
        title: 'Who decides?',
        explanation: 'No neutral authority to determine when intervention justified. Powerful states define "humanitarian" to suit interests. Abuse of humanitarian language to justify regime change.'
      }
    ],
    synoptic_links: [
      'Compare with just war theory',
      'Link to debates about sovereignty and R2P',
      'Connect to UN Security Council role'
    ],
    examples: [
      {
        title: 'Libya 2011',
        context: 'R2P invoked for intervention protecting Benghazi, but mission creep to regime change undermined R2P legitimacy and made Russia/China suspicious of future interventions.'
      },
      {
        title: 'Syria non-intervention',
        context: 'Russia and China vetoed action despite mass atrocities. 500,000+ dead, millions displaced. Shows limits of humanitarian intervention without great power consensus.'
      }
    ],
    pitfalls: [
      'Avoid treating "always justified" as simple question',
      'Consider consistency, authority, and consequences',
      'Reference specific cases and their outcomes'
    ]
  },
  {
    id: 'ma81',
    question_id: 'q81',
    arguments_for: [
      {
        title: 'Individual accountability established',
        explanation: 'ICC, ICTY, ICTR established that individuals including heads of state can be prosecuted for atrocities. Nuremberg precedent extended and institutionalised.'
      },
      {
        title: 'Deterrence effect',
        explanation: 'Threat of prosecution may deter some atrocities. Leaders consider legal consequences. ICC investigation in Ukraine may constrain Russian conduct.'
      },
      {
        title: 'Victim recognition',
        explanation: 'Tribunals document atrocities, establish historical record, give victims voice. Truth-telling function important for transitional justice.'
      },
      {
        title: 'Normative development',
        explanation: 'Jurisprudence clarified genocide, crimes against humanity, war crimes definitions. International humanitarian law strengthened through application.'
      }
    ],
    arguments_against: [
      {
        title: 'Limited reach',
        explanation: 'Major powers not subject to ICC - US, Russia, China, India not members. Court only reaches weak states and defeated leaders. Justice is selective.'
      },
      {
        title: 'Africa bias',
        explanation: 'All early ICC cases from Africa despite atrocities elsewhere. Perceived as neo-colonial institution targeting Global South while powerful escape accountability.'
      },
      {
        title: 'Enforcement gaps',
        explanation: 'No police force to arrest suspects. Putin, al-Bashir indicted but free. Relies on state cooperation that\'s often absent.'
      },
      {
        title: 'Peace vs justice tension',
        explanation: 'ICC arrest warrants can complicate peace negotiations. Indicting sitting leaders may prolong conflicts by removing exit option.'
      }
    ],
    synoptic_links: [
      'Compare with domestic justice systems',
      'Link to debates about universal jurisdiction',
      'Connect to R2P and humanitarian intervention'
    ],
    examples: [
      {
        title: 'Putin ICC arrest warrant',
        context: 'March 2023 warrant for unlawful deportation of Ukrainian children. Symbolically significant but Putin unlikely to face trial while in power.'
      },
      {
        title: 'ICTY Yugoslavia',
        context: 'Prosecuted 161 individuals including Milosevic, Karadzic, Mladic. Documented Srebrenica genocide. Model for transitional justice but took decades.'
      }
    ],
    pitfalls: [
      'Distinguish between different courts and tribunals',
      'Consider both symbolic and practical effectiveness',
      'Avoid unrealistic expectations of international justice'
    ]
  },
  // Global Politics - Comparative Theories
  {
    id: 'ma82',
    question_id: 'q82',
    arguments_for: [
      {
        title: 'Anarchy persists',
        explanation: 'No world government, states remain primary actors, self-help necessary for survival. Liberal institutions haven\'t changed fundamental anarchic structure.'
      },
      {
        title: 'Power politics continues',
        explanation: 'Russia\'s Ukraine invasion, China\'s rise, US-China competition show states pursuing power and security. Balance of power dynamics unchanged.'
      },
      {
        title: 'Liberal order contested',
        explanation: 'Revisionist powers challenge rules-based order. International institutions ineffective when great powers oppose. UN paralysed by vetoes.'
      },
      {
        title: 'Cooperation limited',
        explanation: 'States cooperate only when interests align. Paris Agreement lacks enforcement, WTO disputes unresolved, pandemic response fragmented. Relative gains concerns persist.'
      }
    ],
    arguments_against: [
      {
        title: 'Institutions matter',
        explanation: 'WTO, IMF, EU, NATO shape state behaviour through rules, norms, information-sharing. Cooperation more extensive than realism predicts.'
      },
      {
        title: 'Democratic peace',
        explanation: 'Democracies rarely fight each other. Liberal zone of peace in Europe, OECD countries. Domestic regime type affects international behaviour.'
      },
      {
        title: 'Economic interdependence',
        explanation: 'Trade ties, financial integration, supply chains create mutual vulnerability. War between major trading partners extremely costly.'
      },
      {
        title: 'Non-state actors significant',
        explanation: 'NGOs, multinational corporations, transnational movements influence global politics. State-centric realism misses important dynamics.'
      }
    ],
    synoptic_links: [
      'Compare classical, structural, and neoclassical realism',
      'Link to liberal institutionalism and constructivism',
      'Connect to debates about world order'
    ],
    examples: [
      {
        title: 'Ukraine War',
        context: 'Supports realism - great power aggression, security dilemma, NATO expansion concerns. But also shows liberal response - sanctions, institutional isolation, normative condemnation.'
      },
      {
        title: 'European Union',
        context: 'Challenges realism - former enemies deeply integrated, security community where war unthinkable. Liberal institutionalism better explains EU success.'
      }
    ],
    pitfalls: [
      'Avoid treating theories as mutually exclusive',
      'Consider which theory better explains which phenomena',
      'Reference empirical evidence for both perspectives'
    ]
  },
  {
    id: 'ma83',
    question_id: 'q83',
    arguments_for: [
      {
        title: 'Democratic peace theory',
        explanation: 'Democracies rarely fight each other. Shared norms of compromise, institutional constraints, accountability to peace-preferring publics inhibit war.'
      },
      {
        title: 'Third wave democratisation',
        explanation: 'Post-1974 democracy spread to Latin America, Eastern Europe, Asia, Africa. More democracies meant larger zone of peace.'
      },
      {
        title: 'International institutions',
        explanation: 'Democracies create and support international institutions. EU, NATO, OECD democratic clubs promote cooperation and conflict resolution.'
      },
      {
        title: 'Post-WWII peace',
        explanation: 'No great power war since 1945. Democratic Western alliance maintained peace during Cold War and after. Liberal order brought stability.'
      }
    ],
    arguments_against: [
      {
        title: 'Democracies wage war',
        explanation: 'US wars in Vietnam, Iraq, Afghanistan. Democratic states use force against non-democracies. Democracy doesn\'t guarantee peace, just changes opponents.'
      },
      {
        title: 'Correlation not causation',
        explanation: 'Democratic peace may reflect other factors - economic development, US hegemony, nuclear deterrence. Remove these, democracies might fight.'
      },
      {
        title: 'Democratic backsliding',
        explanation: 'Hungary, Poland, Turkey, India show democracies can regress. Rising authoritarianism reverses democratic gains, threatens liberal peace.'
      },
      {
        title: 'Non-democratic peace',
        explanation: 'Authoritarian powers maintained peace - Cold War stability through nuclear deterrence, China\'s peaceful rise. Democracy not necessary for peace.'
      }
    ],
    synoptic_links: [
      'Compare with realist structural explanations of peace',
      'Link to debates about liberal world order',
      'Connect to democratisation and conflict'
    ],
    examples: [
      {
        title: 'European Union',
        context: 'Franco-German reconciliation, European integration created durable peace among former enemies. Democratic peace exemplified.'
      },
      {
        title: 'India-Pakistan',
        context: 'Both democracies (at least nominally) but fought wars, ongoing conflict over Kashmir. Questions universality of democratic peace.'
      }
    ],
    pitfalls: [
      'Define democracy carefully - different definitions affect findings',
      'Consider competing explanations for peace',
      'Avoid conflating absence of war between democracies with global peace'
    ]
  },
  {
    id: 'ma84',
    question_id: 'q84',
    arguments_for: [
      {
        title: 'War disrupts trade',
        explanation: 'Integrated economies lose from conflict. Russia-Europe energy dependence was supposed to prevent war. Sanctions hurt both sides.'
      },
      {
        title: 'Peace dividend',
        explanation: 'Economic prosperity requires stability. Asian economic miracle occurred in peaceful environment. Development incentivises peace.'
      },
      {
        title: 'Business interests oppose war',
        explanation: 'Multinational corporations, financial institutions, trading communities lobby for peace. Economic elites have stake in stability.'
      },
      {
        title: 'Institutional embedding',
        explanation: 'Trade creates institutions - WTO, investment treaties, supply chains - that increase communication, build trust, provide dispute resolution alternatives.'
      }
    ],
    arguments_against: [
      {
        title: 'Russia invaded Ukraine despite interdependence',
        explanation: 'Europe highly dependent on Russian gas, Russia on European markets. Didn\'t prevent invasion. Security concerns trumped economic interests.'
      },
      {
        title: 'WWI preceded by globalisation',
        explanation: 'Pre-1914 world highly integrated economically. Trade, investment, migration at historic highs. Didn\'t prevent catastrophic war.'
      },
      {
        title: 'Asymmetric dependence weaponised',
        explanation: 'China uses economic leverage for political pressure - Australia trade restrictions, rare earth export controls. Interdependence becomes coercion tool.'
      },
      {
        title: 'Decoupling possible',
        explanation: 'US-China tech decoupling, Russia pivot to Asia show states can restructure economic ties when security requires. Interdependence not irreversible.'
      }
    ],
    synoptic_links: [
      'Compare liberal commercial peace theory with realist scepticism',
      'Link to debates about globalisation and security',
      'Connect to economic statecraft and sanctions'
    ],
    examples: [
      {
        title: 'Russia-Ukraine War',
        context: 'Major test of commercial peace theory. Russia invaded despite heavy economic interdependence with Europe, showing limits of trade as peace guarantee.'
      },
      {
        title: 'US-China relations',
        context: 'Highly interdependent but increasingly competitive and hostile. Economic ties haven\'t prevented security rivalry and potential conflict over Taiwan.'
      }
    ],
    pitfalls: [
      'Consider conditions under which interdependence promotes peace',
      'Distinguish between reducing probability and preventing war',
      'Reference historical and contemporary cases'
    ]
  },
  // Global Politics - Conflict and Intervention
  {
    id: 'ma85',
    question_id: 'q85',
    arguments_for: [
      {
        title: 'Normative shift achieved',
        explanation: '2005 World Summit unanimously endorsed R2P. Sovereignty reconceived as responsibility. States accepted obligation to protect populations from atrocities.'
      },
      {
        title: 'Libya intervention',
        explanation: 'Security Council authorised intervention to protect Benghazi civilians from Gaddafi\'s threatened massacre. R2P provided framework for action.'
      },
      {
        title: 'Preventive focus',
        explanation: 'R2P emphasises prevention (Pillar 1) and international assistance (Pillar 2) before intervention (Pillar 3). Early warning, capacity building, mediation.'
      },
      {
        title: 'Ongoing invocations',
        explanation: 'R2P cited in UN resolutions on Syria, Yemen, Myanmar. Keeps atrocity prevention on agenda even when action blocked.'
      }
    ],
    arguments_against: [
      {
        title: 'Libya backlash',
        explanation: 'NATO mission creep from protection to regime change. Russia and China concluded R2P was cover for Western intervention. Subsequent vetoes blocked Syria action.'
      },
      {
        title: 'Syria failure',
        explanation: '500,000+ dead, millions displaced while R2P principles ignored. Regime used chemical weapons with impunity. R2P meaningless without great power consensus.'
      },
      {
        title: 'Selective application',
        explanation: 'Action in Libya but not Syria, Yemen, Rohingya crisis. Strategic interests determine intervention, not humanitarian need. R2P applied inconsistently.'
      },
      {
        title: 'Unintended consequences',
        explanation: 'Libya intervention created failed state, refugee crisis, weapons proliferation to Sahel. Interventions often make situations worse.'
      }
    ],
    synoptic_links: [
      'Compare with traditional sovereignty doctrine',
      'Link to humanitarian intervention debates',
      'Connect to Security Council reform'
    ],
    examples: [
      {
        title: 'Syria',
        context: 'Definitive R2P failure. Assad committed atrocities while international community paralysed by Russian vetoes. Showed R2P powerless against great power interests.'
      },
      {
        title: 'Kenya 2008',
        context: 'Kofi Annan mediation prevented post-election violence escalation. Often cited as successful R2P Pillar 2 application through prevention.'
      }
    ],
    pitfalls: [
      'Distinguish between R2P as norm and implementation',
      'Consider all three pillars, not just military intervention',
      'Reference specific cases of success and failure'
    ]
  },
  {
    id: 'ma86',
    question_id: 'q86',
    arguments_for: [
      {
        title: 'Paris Agreement achieved',
        explanation: '196 parties to near-universal agreement. First legally binding commitment from all major emitters. Ratchet mechanism for increasing ambition over time.'
      },
      {
        title: 'Emissions trajectory changed',
        explanation: 'Pre-Paris trajectory pointed to 4°C+ warming. Current policies trajectory ~2.7°C. Agreements have bent emissions curve even if insufficiently.'
      },
      {
        title: 'Renewable energy transition',
        explanation: 'Climate agreements drove investment in renewables. Solar and wind now cheapest energy sources. Paris catalysed private sector transition.'
      },
      {
        title: 'Global norm established',
        explanation: 'Climate action now international norm. Even withdrawing states (US under Trump) faced domestic and international pressure. Net-zero commitments widespread.'
      }
    ],
    arguments_against: [
      {
        title: '1.5°C target will be missed',
        explanation: 'Current NDCs insufficient to limit warming to 1.5°C or even 2°C. Emissions still rising globally. Gap between commitments and action.'
      },
      {
        title: 'No enforcement',
        explanation: 'Paris Agreement voluntary - no penalties for non-compliance. States can withdraw (US did), miss targets without consequences.'
      },
      {
        title: 'North-South divide',
        explanation: 'Developed countries haven\'t delivered promised $100 billion climate finance. Historical responsibility unaddressed. Developing countries lack resources for transition.'
      },
      {
        title: 'Fossil fuel interests persist',
        explanation: 'COP28 hosted by UAE, petrostate. Fossil fuel lobbying influences negotiations. Agreements repeatedly delayed meaningful phase-out commitments.'
      }
    ],
    synoptic_links: [
      'Compare with other global governance regimes',
      'Link to debates about collective action problems',
      'Connect to North-South relations and climate justice'
    ],
    examples: [
      {
        title: 'Paris Agreement',
        context: 'Near-universal participation but nationally determined contributions fall short. US withdrawal under Trump showed vulnerability.'
      },
      {
        title: 'COP28 Dubai',
        context: 'First agreement to "transition away from" fossil fuels but language weakened from "phase out". Reflects ongoing tension between ambition and politics.'
      }
    ],
    pitfalls: [
      'Define success carefully - process vs outcomes',
      'Consider counterfactual - what without agreements',
      'Reference specific commitments and actual emissions trends'
    ]
  },
  // UK Government - The Constitution
  {
    id: 'ma87',
    question_id: 'q87',
    arguments_for: [
      {
        title: 'Clarity and accessibility',
        explanation: 'Codified constitution would be contained in single document, making it easier for citizens to understand their rights and how government works. Current constitution scattered across statutes, conventions, and case law.'
      },
      {
        title: 'Entrenchment protects rights',
        explanation: 'Entrenched constitution requires supermajority to amend, protecting fundamental rights from erosion by simple parliamentary majority. Human Rights Act could be repealed by ordinary legislation.'
      },
      {
        title: 'Constitutional crises',
        explanation: 'Recent events like Brexit, prorogation crisis (Miller/Cherry 2019), and Scottish independence referendum exposed gaps in constitutional arrangements. Written rules would provide clarity.'
      },
      {
        title: 'Limited government',
        explanation: 'Codification would clearly define and limit government powers. Executive power through royal prerogative would be constrained. Separation of powers made explicit.'
      }
    ],
    arguments_against: [
      {
        title: 'Flexibility valuable',
        explanation: 'Uncodified constitution can evolve organically to meet changing circumstances. Devolution, Human Rights Act, Supreme Court all achieved without constitutional convention. Flexibility is strength not weakness.'
      },
      {
        title: 'Parliamentary sovereignty preserved',
        explanation: 'Codification would transfer power from elected Parliament to unelected judges who would interpret constitution. Democratic will subordinated to judicial review.'
      },
      {
        title: 'No consensus possible',
        explanation: 'What would codified constitution contain? Monarchy, Lords, electoral system, devolution all contested. Process of agreeing would be divisive and potentially impossible.'
      },
      {
        title: 'System works well',
        explanation: 'UK has stable democratic government, peaceful transfers of power, protected rights. If it ain\'t broke, don\'t fix it. Constitutional crises were resolved within existing framework.'
      }
    ],
    synoptic_links: [
      'Compare with US written constitution and judicial review',
      'Link to debates about parliamentary sovereignty',
      'Connect to rule of law and separation of powers'
    ],
    examples: [
      {
        title: 'Miller/Cherry case 2019',
        context: 'Supreme Court found prorogation unlawful, but had to determine constitutional principles from unwritten sources. Critics said this showed judges making political decisions.'
      },
      {
        title: 'Human Rights Act 1998',
        context: 'Provides some constitutional protection for rights but can be repealed by ordinary legislation. Government has repeatedly threatened replacement with British Bill of Rights.'
      }
    ],
    pitfalls: [
      'Don\'t assume codification automatically improves democracy',
      'Consider practical difficulties of agreeing constitution',
      'Reference specific constitutional controversies'
    ]
  },
  {
    id: 'ma88',
    question_id: 'q88',
    arguments_for: [
      {
        title: 'Outdated institutions',
        explanation: 'House of Lords unelected and unrepresentative. Hereditary peers and bishops have no place in modern democracy. FPTP electoral system produces unrepresentative outcomes.'
      },
      {
        title: 'Constitutional ambiguity',
        explanation: 'Brexit and prorogation crises revealed unclear rules about sovereignty, prerogative powers, and relationship between branches. Miller cases showed judges making political judgments.'
      },
      {
        title: 'Devolution asymmetry',
        explanation: 'Scotland, Wales, Northern Ireland have varying powers while England has none. West Lothian Question unresolved. Union under strain from independence movements.'
      },
      {
        title: 'Executive dominance',
        explanation: 'Government with majority can push through legislation with minimal scrutiny. Whipping system undermines MPs\' independence. Henry VIII powers allow ministers to bypass Parliament.'
      }
    ],
    arguments_against: [
      {
        title: 'Adaptability demonstrated',
        explanation: 'Constitution has adapted successfully - devolution, Human Rights Act, Supreme Court, Fixed-term Parliaments Act (and its repeal). Flexibility enables pragmatic evolution.'
      },
      {
        title: 'Democratic stability',
        explanation: 'UK has centuries of stable democratic government, peaceful transitions, no coups or revolutions. Constitution delivers what matters most - legitimate, accountable government.'
      },
      {
        title: 'Rights protected',
        explanation: 'Human Rights Act, Equality Act, judicial review provide effective rights protection. Courts held government to account in Miller cases, Belmarsh case, and others.'
      },
      {
        title: 'Reform possible within system',
        explanation: 'Recent reforms show constitution can be improved without wholesale replacement. Incremental change preferable to revolutionary upheaval.'
      }
    ],
    synoptic_links: [
      'Compare with written constitutions and their problems',
      'Link to debates about parliamentary sovereignty',
      'Connect to separation of powers and checks and balances'
    ],
    examples: [
      {
        title: 'Brexit process',
        context: 'Exposed tensions between referendum result, parliamentary sovereignty, and devolution. Constitution adapted through Miller cases and eventual withdrawal.'
      },
      {
        title: 'COVID emergency powers',
        context: 'Government used statutory instruments and Henry VIII powers extensively. Parliament had limited scrutiny role. Raised concerns about executive overreach.'
      }
    ],
    pitfalls: [
      'Avoid assuming constitution is either perfect or broken',
      'Consider what "fit for purpose" means - different purposes may require different judgments',
      'Reference specific recent constitutional issues'
    ]
  },
  {
    id: 'ma89',
    question_id: 'q89',
    arguments_for: [
      {
        title: 'Devolution achieved',
        explanation: 'Scottish Parliament, Welsh Senedd, Northern Ireland Assembly created, bringing government closer to citizens. Scotland now has extensive tax and welfare powers. Wales gained primary legislative powers.'
      },
      {
        title: 'Human Rights Act embedded',
        explanation: 'HRA 1998 incorporated ECHR into UK law, allowing rights cases in domestic courts. Declarations of incompatibility influence Parliament. Changed political culture around rights.'
      },
      {
        title: 'Supreme Court independence',
        explanation: 'Constitutional Reform Act 2005 separated judiciary from legislature, creating independent Supreme Court. Judicial Appointments Commission reduced political influence on appointments.'
      },
      {
        title: 'Freedom of Information',
        explanation: 'FOI Act 2000 increased government transparency. MPs\' expenses scandal exposed through FOI requests. Changed culture of secrecy.'
      }
    ],
    arguments_against: [
      {
        title: 'House of Lords unreformed',
        explanation: '1999 reform removed most hereditary peers but left 92 and appointed lords. No elected second chamber despite multiple proposals. Blair, Coalition, and subsequent governments failed to complete reform.'
      },
      {
        title: 'Devolution inconsistent',
        explanation: 'Asymmetric devolution left England without representation. West Lothian Question unresolved. EVEL was inadequate response, now abandoned. Devolution settlements continue to change ad hoc.'
      },
      {
        title: 'Electoral reform abandoned',
        explanation: 'Promised referendum on PR never delivered (1997). 2011 AV referendum rejected change. Westminster still uses FPTP while devolved bodies use proportional systems.'
      },
      {
        title: 'Reform reversed',
        explanation: 'Fixed-term Parliaments Act repealed. Human Rights Act under threat. Judicial Review Bill sought to limit court powers. Reforms not entrenched or secure.'
      }
    ],
    synoptic_links: [
      'Link to debates about codification',
      'Compare with other countries\' constitutional reform',
      'Connect to parliamentary sovereignty and devolution'
    ],
    examples: [
      {
        title: 'Scottish independence referendum 2014',
        context: 'Devolution led to SNP majority and independence vote. Shows devolution may encourage rather than satisfy nationalist demands.'
      },
      {
        title: 'Miller II (Cherry) 2019',
        context: 'Supreme Court\'s prorogation ruling showed courts can check executive, but also generated controversy about judicial activism.'
      }
    ],
    pitfalls: [
      'Evaluate each reform separately - some more successful than others',
      'Consider both intended and unintended consequences',
      'Reference specific reforms and their outcomes'
    ]
  },
  {
    id: 'ma90',
    question_id: 'q90',
    arguments_for: [
      {
        title: 'Scotland gained substantial powers',
        explanation: 'Scottish Parliament has primary legislative powers, income tax variation, welfare powers after Smith Commission. SNP can pursue distinctive policies on education, health, tuition fees.'
      },
      {
        title: 'Wales progressively empowered',
        explanation: 'Welsh devolution evolved from executive body to legislative Parliament. 2017 Wales Act gave reserved powers model. Senedd now has tax powers and can set its own election rules.'
      },
      {
        title: 'England lacks representation',
        explanation: 'No English Parliament or regional assemblies. EVEL was inadequate compromise, now abandoned. English voters have no distinctive voice in devolved matters.'
      },
      {
        title: 'Northern Ireland unstable',
        explanation: 'Power-sharing executive collapsed repeatedly (2017-2020, 2022-2024). Brexit created Protocol tensions. Stormont suspension shows devolution depends on political circumstances.'
      }
    ],
    arguments_against: [
      {
        title: 'England has different needs',
        explanation: 'England is 85% of UK population. English regional assemblies rejected in 2004 referendum. Combined authorities and metro mayors provide English devolution appropriate to context.'
      },
      {
        title: 'Scotland demands more',
        explanation: 'Despite extensive powers, SNP seeks independence. Devolution hasn\'t satisfied nationalist aspirations. Scottish voters not content with settlement.'
      },
      {
        title: 'Northern Ireland peace achieved',
        explanation: 'Good Friday Agreement brought peace after decades of conflict. Power-sharing, while imperfect, is transformational achievement. Suspensions are feature not bug of consociational system.'
      },
      {
        title: 'Wales shows gradual success',
        explanation: 'Welsh devolution demonstrates incremental expansion works. Started weak, grew stronger. Patience and pragmatism more effective than comprehensive redesign.'
      }
    ],
    synoptic_links: [
      'Compare federal systems internationally',
      'Link to debates about English votes for English laws',
      'Connect to nationalism and self-determination'
    ],
    examples: [
      {
        title: 'Scottish independence referendum',
        context: '2014 vote showed devolution hadn\'t eliminated independence movement. 2021 SNP majority renewed demands. Devolution may have empowered rather than satisfied nationalists.'
      },
      {
        title: 'Northern Ireland Protocol',
        context: 'Brexit created new tensions in Northern Ireland, threatening devolution settlement. DUP collapsed executive over Protocol. Shows external events can destabilise devolution.'
      }
    ],
    pitfalls: [
      'Evaluate each nation separately',
      'Consider what success means in each context',
      'Avoid assuming one-size-fits-all approach would work'
    ]
  },
  {
    id: 'ma91',
    question_id: 'q91',
    arguments_for: [
      {
        title: 'Independence movements strengthened',
        explanation: 'Scottish Parliament gave SNP platform to win majority and hold independence referendum. 2014 vote was 45% Yes; support has since grown. Devolution may have enabled rather than prevented separatism.'
      },
      {
        title: 'Divergent policies create tensions',
        explanation: 'Different tuition fees, prescription charges, COVID rules between nations highlight divisions. Citizens in different parts of UK have different rights and services.'
      },
      {
        title: 'West Lothian Question unresolved',
        explanation: 'Scottish MPs can vote on English matters but English MPs cannot vote on devolved Scottish matters. Creates democratic anomaly and English resentment.'
      },
      {
        title: 'Northern Ireland special status',
        explanation: 'Brexit Protocol created effective border in Irish Sea. Northern Ireland subject to some EU rules while GB is not. Union asymmetry increased.'
      }
    ],
    arguments_against: [
      {
        title: 'Union preserved',
        explanation: '2014 referendum rejected independence. UK still united after 25 years of devolution. Scotland, Wales, Northern Ireland remain part of UK. Devolution provides outlet for nationalist sentiment.'
      },
      {
        title: 'Addresses legitimate grievances',
        explanation: 'Devolution recognises distinct national identities within UK. Scots, Welsh, Northern Irish can make decisions on matters affecting them. Democratic legitimacy enhanced not undermined.'
      },
      {
        title: 'Strengthens participation',
        explanation: 'More levels of government mean more opportunities for participation. Devolved elections engage citizens. Brings government closer to people.'
      },
      {
        title: 'Alternative would be worse',
        explanation: 'Without devolution, demands for independence might be stronger. Scottish Parliament provides voice short of separation. Centralised UK government would face greater legitimacy challenges.'
      }
    ],
    synoptic_links: [
      'Compare with federal systems and secessionist movements',
      'Link to debates about sovereignty',
      'Connect to nationalism and national identity'
    ],
    examples: [
      {
        title: 'Scottish independence referendum 2014',
        context: 'Devolution led to SNP government that called referendum. 45% voted Yes. Devolution may have enabled independence movement to grow.'
      },
      {
        title: 'Brexit',
        context: 'Scotland voted Remain but was taken out of EU. Created new grievance and renewed independence demands. Shows devolution cannot always protect devolved nations from UK-wide decisions.'
      }
    ],
    pitfalls: [
      'Consider counterfactual - would unity be stronger without devolution?',
      'Avoid assuming correlation (devolution and nationalism) means causation',
      'Reference specific tensions and how they have been managed'
    ]
  },
  {
    id: 'ma92',
    question_id: 'q92',
    arguments_for: [
      {
        title: 'West Lothian Question',
        explanation: 'Scottish MPs can vote on English matters but not vice versa. EVEL was inadequate solution, now abandoned. Creates two classes of MP and resentment.'
      },
      {
        title: 'Barnett formula disputes',
        explanation: 'Per capita spending higher in Scotland than England. Formula created for temporary use but persists. Generates English grievances about unfairness.'
      },
      {
        title: 'Independence demands',
        explanation: 'Rather than satisfying nationalist sentiment, devolution empowered SNP to seek independence. 2014 referendum and ongoing demands show devolution hasn\'t resolved national question.'
      },
      {
        title: 'Complexity and confusion',
        explanation: 'Asymmetric devolution means different powers in different nations. Citizens unclear which level responsible for what. Accountability blurred.'
      }
    ],
    arguments_against: [
      {
        title: 'Peace in Northern Ireland',
        explanation: 'Good Friday Agreement and devolution ended decades of violence. Power-sharing brought former enemies into government together. This achievement alone justifies devolution.'
      },
      {
        title: 'Democratic responsiveness',
        explanation: 'Decisions on health, education, local government made closer to affected citizens. Different policies reflect different preferences. Welsh language protected, Scottish distinct legal system maintained.'
      },
      {
        title: 'Preserved Union',
        explanation: 'Independence referendum failed. UK remains intact. Devolution may have been necessary to prevent worse outcomes. Outlet for nationalist sentiment without separation.'
      },
      {
        title: 'Problems exaggerated',
        explanation: 'Most policy areas work fine under devolution. Media focus on disputes obscures everyday success. Cooperation between UK and devolved governments usually effective.'
      }
    ],
    synoptic_links: [
      'Compare with problems in federal systems',
      'Link to debates about territorial justice',
      'Connect to multi-level governance theory'
    ],
    examples: [
      {
        title: 'COVID policy divergence',
        context: 'Different lockdown rules, travel restrictions between nations created confusion and complaints. But also showed devolution working - nations could respond to local circumstances.'
      },
      {
        title: 'Northern Ireland Protocol',
        context: 'Brexit created new problem for devolution settlement. DUP withdrew from Executive. External shock (Brexit) created devolution problem, not devolution itself.'
      }
    ],
    pitfalls: [
      'Balance problems against achievements',
      'Consider what problems would exist without devolution',
      'Reference specific disputes and how they were or weren\'t resolved'
    ]
  },
  // UK Government - Parliament
  {
    id: 'ma93',
    question_id: 'q93',
    arguments_for: [
      {
        title: 'Expertise and scrutiny',
        explanation: 'Lords contains experts - former ministers, judges, professionals - who improve legislation. Less partisan, more thoughtful scrutiny. Technical amendments often accepted by government.'
      },
      {
        title: 'Revising chamber effectiveness',
        explanation: 'Lords regularly amends bills. Government accepts many amendments to avoid ping-pong. Salisbury Convention limits opposition but doesn\'t prevent improvement of legislation.'
      },
      {
        title: 'No electoral pressures',
        explanation: 'Unelected Lords can take long view, resist populist pressures, scrutinise without fear of losing seats. Independence from electoral cycle enables more honest assessment.'
      },
      {
        title: 'Recent government defeats',
        explanation: 'Lords inflicted hundreds of defeats on governments since 2000. Rwanda deportation policy, Brexit bills, COVID regulations all amended. Government often backs down to avoid extended delays.'
      }
    ],
    arguments_against: [
      {
        title: 'Commons is sovereign',
        explanation: 'Parliament Acts 1911 and 1949 allow Commons to override Lords. Lords can only delay money bills one month, other bills one year. Ultimate power rests with elected chamber.'
      },
      {
        title: 'Democratic legitimacy',
        explanation: 'Commons members elected, Lords appointed. Democratic mandate means Commons decisions should prevail. Lords legitimacy comes from accepting this subordinate role.'
      },
      {
        title: 'Salisbury Convention',
        explanation: 'Lords accepts it shouldn\'t block manifesto commitments. Government\'s electoral mandate constrains Lords opposition. Convention limits practical influence on key policies.'
      },
      {
        title: 'Government dominates Commons',
        explanation: 'With majority, government controls Commons timetable, legislation, and votes. Real power is government power, exercised through compliant Commons majority.'
      }
    ],
    synoptic_links: [
      'Compare with bicameral systems internationally',
      'Link to debates about Lords reform',
      'Connect to parliamentary sovereignty'
    ],
    examples: [
      {
        title: 'Rwanda policy amendments',
        context: 'Lords repeatedly amended Safety of Rwanda Bill in 2024. Government had to use Parliament Act threat and accept some changes. Shows Lords influence even on flagship policies.'
      },
      {
        title: 'Brexit legislation',
        context: 'Lords secured amendments on EU citizens\' rights, meaningful vote, customs union. Government accepted many to avoid delay. Demonstrates effective revising role.'
      }
    ],
    pitfalls: [
      'Distinguish between formal powers and practical influence',
      'Consider different types of influence on different legislation',
      'Reference specific examples of Lords impact'
    ]
  },
  {
    id: 'ma94',
    question_id: 'q94',
    arguments_for: [
      {
        title: 'Democratic legitimacy',
        explanation: 'In a democracy, law-makers should be elected. Appointed chamber lacks mandate. Lords cannot claim to represent the people. Election would give second chamber democratic authority.'
      },
      {
        title: 'Accountability',
        explanation: 'Elected Lords could be removed by voters. Currently Lords face no electoral sanction for decisions. Election creates incentive to serve public interest.'
      },
      {
        title: 'Modernisation',
        explanation: 'UK is outlier with large unelected legislative chamber. House of Lords is anachronism. Hereditary peers and bishops particularly indefensible. Time to bring second chamber into democratic era.'
      },
      {
        title: 'Effective scrutiny',
        explanation: 'Elected chamber would have confidence to challenge government. Current Lords self-limits due to legitimacy concerns. Election would strengthen scrutiny function.'
      }
    ],
    arguments_against: [
      {
        title: 'Different function served',
        explanation: 'Lords provides expert, non-partisan revision. Election would import party politics. Appointed members bring experience and expertise that elected politicians lack.'
      },
      {
        title: 'Constitutional conflict',
        explanation: 'Two elected chambers would compete for democratic mandate. Which should prevail? Current subordination of Lords to Commons resolves this. Election would create gridlock.'
      },
      {
        title: 'Party dominance increased',
        explanation: 'Election would mean party candidates. Cross-benchers would disappear. Lords currently has genuine independents. Election would reduce diversity of views.'
      },
      {
        title: 'Current system works',
        explanation: 'Lords provides effective scrutiny without challenging Commons supremacy. Governments accept amendments. System balances democracy and expertise. Reform would be disruptive.'
      }
    ],
    synoptic_links: [
      'Compare with elected second chambers internationally',
      'Link to debates about parliamentary sovereignty',
      'Connect to separation of powers'
    ],
    examples: [
      {
        title: 'House of Lords Reform Bill 2012',
        context: 'Coalition proposed 80% elected Lords. Conservative backbench rebellion killed the bill. Shows elected Lords lacks consensus even among reformers.'
      },
      {
        title: 'US Senate gridlock',
        context: 'Elected second chamber in US creates frequent deadlock between houses. Senate can block House bills indefinitely. Warns against assuming elected chamber would improve governance.'
      }
    ],
    pitfalls: [
      'Consider practical implications of election',
      'Think about relationship between two elected chambers',
      'Reference failed reform attempts and why they failed'
    ]
  },
  {
    id: 'ma95',
    question_id: 'q95',
    arguments_for: [
      {
        title: 'Democratic deficit',
        explanation: 'Lords members not elected. 92 hereditary peers and 26 bishops remain. Appointments by PM create patronage. Size (800+) unwieldy. Fundamental lack of democratic legitimacy.'
      },
      {
        title: 'Unrepresentative composition',
        explanation: 'Lords predominantly white, male, elderly, southern. Average age 70+. Doesn\'t reflect UK demographics. London and Southeast overrepresented.'
      },
      {
        title: 'Inconsistent powers',
        explanation: 'Salisbury Convention limits opposition to manifesto policies but scope unclear. Powers depend on self-restraint and convention. No clear constitutional role.'
      },
      {
        title: 'Attendance and participation issues',
        explanation: 'Many Lords rarely attend. Daily allowance creates perverse incentives. Crossbenchers provide expertise but also include cronies and party donors.'
      }
    ],
    arguments_against: [
      {
        title: 'Effective scrutiny provided',
        explanation: 'Lords committees produce high-quality reports. Scientific, economic, constitutional expertise lacking in Commons. Government accepts many Lords amendments.'
      },
      {
        title: 'Independence from party',
        explanation: 'No whipping on many votes. Crossbenchers genuinely independent. Less partisan than Commons. This independence enables more honest scrutiny.'
      },
      {
        title: 'Reform already achieved',
        explanation: '1999 reform removed most hereditary peers. Life Peers Act 1958 opened Lords to merit appointments. Lords Spiritual reduced. Incremental reform working.'
      },
      {
        title: 'Expertise valuable',
        explanation: 'Former cabinet ministers, judges, military leaders, scientists, business people bring knowledge Commons lacks. Technical expertise improves legislation.'
      }
    ],
    synoptic_links: [
      'Compare with other second chamber models',
      'Link to debates about parliamentary sovereignty',
      'Connect to representation and democracy theories'
    ],
    examples: [
      {
        title: 'Burns Report 2017',
        context: 'Lord Speaker\'s committee proposed reducing Lords to 600 through retirement incentives. Implementation slow. Shows even modest reform difficult.'
      },
      {
        title: 'COVID-19 scrutiny',
        context: 'Lords committees provided detailed scrutiny of emergency powers when Commons couldn\'t sit normally. Demonstrated value of expert, less partisan scrutiny.'
      }
    ],
    pitfalls: [
      'Distinguish between membership issues and role issues',
      'Consider which reforms are feasible',
      'Reference specific proposals and their prospects'
    ]
  },
  {
    id: 'ma96',
    question_id: 'q96',
    arguments_for: [
      {
        title: 'Quality of scrutiny',
        explanation: 'Lords debates more substantive, less partisan. Expert members improve legislation. Select committee reports (Constitution Committee, Science Committee) highly regarded.'
      },
      {
        title: 'Revision effective',
        explanation: 'Lords regularly amends bills. Government accepts changes to avoid ping-pong. Technical improvements often initiated in Lords. Legislation leaves Lords better than it entered.'
      },
      {
        title: 'Less executive dominated',
        explanation: 'Government doesn\'t have guaranteed majority in Lords. Crossbenchers hold balance. Less whipping means more independent judgment. Scrutiny function less compromised.'
      },
      {
        title: 'Time for detailed examination',
        explanation: 'Lords takes time over bills that Commons rushes. Committee stage more thorough. Members can specialise. No constituency demands distracting from legislative work.'
      }
    ],
    arguments_against: [
      {
        title: 'Commons democratically legitimate',
        explanation: 'MPs elected by constituents, Lords appointed. Democratic mandate means Commons decisions should prevail. Fulfilling representative function requires election.'
      },
      {
        title: 'Commons holds government to account',
        explanation: 'PMQs, select committees, debates, votes of confidence - Commons can remove government. Lords cannot. Ultimate accountability function in Commons.'
      },
      {
        title: 'Lords deliberately limited',
        explanation: 'Salisbury Convention, Parliament Acts mean Lords self-limits. Success depends on accepting subordinate role. Not fair comparison when Lords chooses not to obstruct.'
      },
      {
        title: 'Commons represents constituents',
        explanation: 'MPs have constituency role - casework, surgeries, local advocacy. Lords members don\'t represent anyone. Representation function unique to Commons.'
      }
    ],
    synoptic_links: [
      'Compare bicameral systems internationally',
      'Link to debates about democratic legitimacy',
      'Connect to functions of Parliament'
    ],
    examples: [
      {
        title: 'Constitution Committee reports',
        context: 'Lords Constitution Committee produces highly respected analysis of constitutional issues. COVID powers, devolution, Brexit all examined. Expertise that Commons lacks.'
      },
      {
        title: 'Brexit amendments',
        context: 'Lords secured meaningful vote for Commons, EU citizens\' rights protections. Changed course of Brexit legislation. Shows Lords can be more effective than partisan Commons.'
      }
    ],
    pitfalls: [
      'Compare like with like - what functions are we comparing?',
      'Consider why Lords might appear more successful',
      'Don\'t assume effectiveness equals democratic value'
    ]
  },
  {
    id: 'ma97',
    question_id: 'q97',
    arguments_for: [
      {
        title: 'Government controls timetable',
        explanation: 'Executive determines what legislation is debated and when. Programme motions limit debate time. Guillotine cuts off discussion. Government gets its legislation through.'
      },
      {
        title: 'Whipping enforces discipline',
        explanation: 'Three-line whips ensure MPs vote with government. Rebellion is rare and usually unsuccessful. Party loyalty trumps scrutiny. MPs fear deselection.'
      },
      {
        title: 'Limited Private Members\' Bills success',
        explanation: 'PMBs rarely become law without government support. Friday sittings poorly attended. Talking out common. Backbenchers have little legislative initiative.'
      },
      {
        title: 'Select committee recommendations ignored',
        explanation: 'Committees produce reports but government often rejects recommendations. No power to compel acceptance. Scrutiny without consequence.'
      }
    ],
    arguments_against: [
      {
        title: 'Public Bill Committees examine legislation',
        explanation: 'Bills scrutinised line-by-line in committee. Amendments proposed and debated. Opposition and government MPs participate. Technical improvements made.'
      },
      {
        title: 'Lords provides revision',
        explanation: 'Second chamber amends bills. Government accepts many changes. Ping-pong creates negotiation. Final legislation often substantially different from initial bill.'
      },
      {
        title: 'Backbench rebellions',
        explanation: 'Rebellions increased since 1970s. May government defeated repeatedly on Brexit. Johnson government lost early votes. Government cannot take MPs for granted.'
      },
      {
        title: 'Select committees influential',
        explanation: 'Committee hearings hold ministers and officials to account. Media coverage increases pressure. Government responds to reports. Influence exceeds formal powers.'
      }
    ],
    synoptic_links: [
      'Compare with legislatures in other democracies',
      'Link to debates about executive dominance',
      'Connect to separation of powers'
    ],
    examples: [
      {
        title: 'Brexit defeats 2017-19',
        context: 'May government suffered historic defeats on Brexit legislation. Commons imposed conditions, rejected deals. Shows Parliament can shape legislation on critical issues.'
      },
      {
        title: 'COVID regulations',
        context: 'Many regulations passed with minimal scrutiny under emergency powers. MPs voted retrospectively if at all. Shows Parliament can be bypassed.'
      }
    ],
    pitfalls: [
      'Distinguish between normal times and crises',
      'Consider different types of legislation',
      'Reference specific examples of Parliament shaping legislation'
    ]
  },
  {
    id: 'ma98',
    question_id: 'q98',
    arguments_for: [
      {
        title: 'Expertise and continuity',
        explanation: 'Select committees develop specialist knowledge. Cross-party membership reduces partisanship. Same MPs scrutinise department over years. Build expertise ministers and civil servants lack.'
      },
      {
        title: 'Power to summon witnesses',
        explanation: 'Committees can compel ministers, officials, experts to give evidence. Public hearings create transparency. Cannot refuse to appear (though some have).'
      },
      {
        title: 'Influential reports',
        explanation: 'Committee reports attract media attention. Recommendations shape debate. Government must respond. Treasury Committee, Health Committee particularly influential.'
      },
      {
        title: 'Wright reforms strengthened committees',
        explanation: '2010 reforms gave Commons control over chair elections and membership. More independent from whips. Chairs have higher profile and authority.'
      }
    ],
    arguments_against: [
      {
        title: 'No power to enforce recommendations',
        explanation: 'Government can and does reject committee findings. Reports are advisory. Ministers can ignore recommendations. Scrutiny without sanction.'
      },
      {
        title: 'PMQs and debates also important',
        explanation: 'Prime Minister\'s Questions holds PM directly to account weekly. Televised, high profile. Opposition can set agenda on opposition days. Multiple scrutiny mechanisms exist.'
      },
      {
        title: 'Resource constraints',
        explanation: 'Committees lack staff compared to government departments. Cannot match civil service expertise. Limited time for detailed investigation.'
      },
      {
        title: 'Partisanship persists',
        explanation: 'Despite cross-party membership, MPs still vote on party lines. Government MPs may protect ministers. Genuinely critical scrutiny limited.'
      }
    ],
    synoptic_links: [
      'Compare with Congressional committees in US',
      'Link to debates about parliamentary scrutiny',
      'Connect to separation of powers'
    ],
    examples: [
      {
        title: 'Treasury Committee',
        context: 'Regular hearings with Chancellor and Bank of England Governor. Influential on economic policy. Chair Andrew Tyrie pursued bank reform effectively.'
      },
      {
        title: 'DCMS Committee Partygate inquiry',
        context: 'Committee investigated COVID rule-breaking in Downing Street. High profile hearings. Though couldn\'t compel sanction, contributed to political accountability.'
      }
    ],
    pitfalls: [
      'Compare select committees with other scrutiny methods',
      'Consider what "most effective" means',
      'Reference specific committee achievements'
    ]
  },
  {
    id: 'ma99',
    question_id: 'q99',
    arguments_for: [
      {
        title: 'Select committee roles',
        explanation: 'Departmental select committees scrutinise government systematically. Wright reforms gave backbenchers control over chairs. Detailed, expert scrutiny that ministers cannot avoid.'
      },
      {
        title: 'Increased rebellions',
        explanation: 'Backbench rebellions more common since 1970s. Brexit votes showed MPs willing to defy government. Less deference, more independence.'
      },
      {
        title: 'Limited legislative role anyway',
        explanation: 'Private Members\' Bills rarely succeed. Government controls timetable. Backbenchers have little legislative initiative. Scrutiny is where they can make difference.'
      },
      {
        title: 'Media and public expectation',
        explanation: 'Voters expect MPs to hold government to account. Post-expenses scandal, MPs need to demonstrate value. Scrutiny role responds to public demands.'
      }
    ],
    arguments_against: [
      {
        title: 'Representation equally important',
        explanation: 'MPs represent constituents. Casework, surgeries, local advocacy are core functions. Many MPs prioritise constituency work over Westminster scrutiny.'
      },
      {
        title: 'Legislation still matters',
        explanation: 'MPs vote on laws. Public Bill Committee scrutiny improves legislation. Even if government usually wins, detailed amendment work has value.'
      },
      {
        title: 'Constituency link unique to MPs',
        explanation: 'Ministers and Lords cannot represent localities. Only Commons members have geographic constituencies. This representative function is unique and valuable.'
      },
      {
        title: 'Multiple roles coexist',
        explanation: 'MPs are legislators, scrutineers, representatives, and recruiters of ministers. No single role is "principal". All functions matter.'
      }
    ],
    synoptic_links: [
      'Compare with other legislatures',
      'Link to theories of representation',
      'Connect to parliamentary sovereignty'
    ],
    examples: [
      {
        title: 'Grenfell Tower inquiry',
        context: 'Backbenchers pushed for inquiry into fire. Constituency MP Emma Dent Coad advocated for victims. Shows representation and scrutiny roles overlap.'
      },
      {
        title: 'Liaison Committee',
        context: 'PM appears before committee of select committee chairs. Direct accountability to backbenchers. Scrutiny role institutionalised.'
      }
    ],
    pitfalls: [
      'Consider what "principal" role means',
      'Don\'t assume roles are mutually exclusive',
      'Reference changes over time in MP roles'
    ]
  },
  // UK Government - Prime Minister and Executive
  {
    id: 'ma100',
    question_id: 'q100',
    arguments_for: [
      {
        title: 'PM patronage power',
        explanation: 'PM hires and fires ministers, determines Cabinet composition and reshuffles. Ministers owe position to PM. Creates loyalty and deference. Cabinet members won\'t challenge patron.'
      },
      {
        title: 'PM controls agenda',
        explanation: 'PM chairs Cabinet, sets agenda, summarises conclusions. Can exclude items from discussion. Cabinet committees chaired by PM allies. Structure favours PM\'s preferences.'
      },
      {
        title: 'Media focus on PM',
        explanation: 'Presidential-style coverage focuses on PM personally. Elections fought as contests between leaders. PM has platform that Cabinet ministers lack.'
      },
      {
        title: 'Blair\'s sofa government',
        explanation: 'Blair made decisions in bilateral meetings, bypassed Cabinet. Iraq war decision made with small group. Showed PM can marginalise collective Cabinet.'
      }
    ],
    arguments_against: [
      {
        title: 'PM needs Cabinet support',
        explanation: 'PM depends on senior ministers. Resignation of key figures damages PM (Howe resigned, Major\'s Cabinet splits). Cabinet can remove PM (Thatcher).'
      },
      {
        title: 'Collective responsibility',
        explanation: 'Cabinet decisions have collective authority. PM alone lacks mandate for major policies. Convention requires Cabinet agreement for significant decisions.'
      },
      {
        title: 'Department autonomy',
        explanation: 'Ministers run their departments. PM cannot micromanage across government. Chancellor, Home Secretary, Foreign Secretary have substantial independent power.'
      },
      {
        title: 'Recent PMs constrained',
        explanation: 'May faced Cabinet rebellions on Brexit. Johnson Cabinet members resigned over conduct. Truss fell when Cabinet withdrew support. PM power depends on circumstances.'
      }
    ],
    synoptic_links: [
      'Compare with presidential systems',
      'Link to debates about core executive',
      'Connect to ministerial responsibility'
    ],
    examples: [
      {
        title: 'Thatcher resignation 1990',
        context: 'Cabinet members told Thatcher she couldn\'t win leadership contest. Collective withdrawal of support forced resignation. Shows Cabinet can remove PM.'
      },
      {
        title: 'Johnson resignation 2022',
        context: 'Mass Cabinet resignations forced Johnson out. Ministers unwilling to defend PM. Shows PM depends on Cabinet support.'
      }
    ],
    pitfalls: [
      'Consider variation between different PMs and circumstances',
      'Avoid assuming PM always dominant or always constrained',
      'Reference specific examples of both PM power and Cabinet influence'
    ]
  },
  {
    id: 'ma101',
    question_id: 'q101',
    arguments_for: [
      {
        title: 'Patronage powers',
        explanation: 'PM appoints and dismisses ministers, creates peers, nominates bishops, recommends honours. Extensive appointment power concentrated in single person.'
      },
      {
        title: 'Royal prerogative',
        explanation: 'PM exercises prerogative powers - deploying armed forces, making treaties, calling elections (before FTPA). Executive actions without parliamentary approval.'
      },
      {
        title: 'Limited accountability',
        explanation: 'PM faces only weekly PMQs. Can avoid select committees (though Liaison Committee exists). Media managed through briefings. Less scrutiny than other ministers.'
      },
      {
        title: 'Presidential style',
        explanation: 'Leaders\' debates, media focus on PM, centralised campaigns make PM dominant figure. Parliament subordinate to executive led by powerful PM.'
      }
    ],
    arguments_against: [
      {
        title: 'Party constraints',
        explanation: 'PM leads party, doesn\'t own it. Backbenchers can rebel. Leadership challenges possible (Thatcher, May, Johnson). PM must maintain party confidence.'
      },
      {
        title: 'Cabinet and ministers',
        explanation: 'Senior ministers have independent power bases. Chancellor controls Treasury. Departments resist PM interference. Core executive is interdependent not hierarchical.'
      },
      {
        title: 'Parliament can check PM',
        explanation: 'Commons can defeat government, refuse legislation, withdraw confidence. May suffered historic Brexit defeats. Parliament asserted sovereignty over Brexit.'
      },
      {
        title: 'Events constrain',
        explanation: 'COVID, economic crises, international events force PM responses. "Events, dear boy, events" limit PM agenda. Power is reactive not directive.'
      }
    ],
    synoptic_links: [
      'Compare with US President and constraints',
      'Link to debates about executive power',
      'Connect to parliamentary sovereignty'
    ],
    examples: [
      {
        title: 'Miller cases',
        context: 'Supreme Court constrained PM - requiring parliamentary approval for Article 50, ruling prorogation unlawful. Shows PM subject to legal constraints.'
      },
      {
        title: 'Brexit defeats',
        context: 'May suffered largest defeats in parliamentary history. Commons controlled Brexit process despite PM opposition. Parliament asserted power over executive.'
      }
    ],
    pitfalls: [
      'Consider both formal powers and practical constraints',
      'Avoid assuming PM is either president or puppet',
      'Reference recent examples of PM power and limitations'
    ]
  },
  {
    id: 'ma102',
    question_id: 'q102',
    arguments_for: [
      {
        title: 'Coalition required collegiality',
        explanation: 'Cameron-Clegg coalition 2010-15 required genuine Cabinet discussion. Two parties meant compromises negotiated in Cabinet. Coalition agreement enforced collective decision-making.'
      },
      {
        title: 'May\'s weakness',
        explanation: 'After 2017 election loss, May lacked authority. Cabinet members openly disagreed. Brexit policy determined by Cabinet battles not PM diktat. Collective responsibility almost broke down.'
      },
      {
        title: 'Truss cabinet constraints',
        explanation: 'Truss tried to govern through small circle but Cabinet pushed back on economic policy. Chancellor Kwarteng sacked, policies reversed. Shows Cabinet power when PM weak.'
      },
      {
        title: 'Johnson initially collegiate',
        explanation: 'Early Johnson Cabinet had strong figures - Gove, Javid, Sunak. Not purely PM-dominated. COVID response involved genuine Cabinet involvement.'
      }
    ],
    arguments_against: [
      {
        title: 'PM still dominant when strong',
        explanation: 'Johnson with 80-seat majority dominated Cabinet. Reshuffles punished disloyalty. Patronage concentrated power. Strong PM means weak Cabinet.'
      },
      {
        title: 'Coalition was exception',
        explanation: '2010-15 coalition unusual. Single-party governments since then reverted to PM dominance (when PM is strong). Coalition proves rule by being exception.'
      },
      {
        title: 'Cabinet less powerful than before',
        explanation: 'Thatcher, Blair, Johnson all marginalised Cabinet when strong. Long-term trend toward PM power. Brief Cabinet assertion during weak PM periods doesn\'t change this.'
      },
      {
        title: 'Core executive model',
        explanation: 'Power depends on resources and relationships, not just PM or Cabinet. PM-Cabinet distinction oversimplifies. Both are powerful or weak depending on context.'
      }
    ],
    synoptic_links: [
      'Compare different PM styles',
      'Link to core executive literature',
      'Connect to coalition government theory'
    ],
    examples: [
      {
        title: 'Cameron-Clegg coalition',
        context: 'Quad (PM, DPM, Chancellor, Chief Secretary) made key decisions. Cabinet committees important. Genuine power-sharing required by coalition arithmetic.'
      },
      {
        title: 'May\'s Cabinet divisions',
        context: 'Hard and soft Brexit factions openly fought. Johnson, Gove, Hammond represented different positions. Cabinet not united behind PM leadership.'
      }
    ],
    pitfalls: [
      'Distinguish between different PMs and circumstances',
      'Consider what "cabinet government" means',
      'Avoid assuming single pattern fits all cases'
    ]
  },
  {
    id: 'ma103',
    question_id: 'q103',
    arguments_for: [
      {
        title: 'Media personalisation',
        explanation: 'Leaders\' debates, personality-focused coverage, PM\'s media profile all presidential. Elections fought as contests between leaders. PM\'s image dominates campaigns.'
      },
      {
        title: 'Spatial leadership',
        explanation: 'PM positions above party, speaks for nation not faction. Blair, Cameron, Johnson all cultivated above-party image. Personal mandate claimed.'
      },
      {
        title: 'Centralised policy-making',
        explanation: 'Downing Street policy units, special advisers, No.10 dominance over departments. PM directs policy, ministers implement. Resembles presidential staff system.'
      },
      {
        title: 'Foreign policy dominance',
        explanation: 'PM leads at summits, conducts relations with other leaders, makes commitments internationally. Foreign affairs traditionally PM prerogative.'
      }
    ],
    arguments_against: [
      {
        title: 'Party leader not president',
        explanation: 'PM leads party, can be removed by party. Thatcher, May, Johnson all ousted by own MPs. President has fixed term; PM serves at pleasure of party.'
      },
      {
        title: 'No separate mandate',
        explanation: 'PM not directly elected by voters. Wins constituency seat only. No popular mandate separate from party. Sunak became PM without general election.'
      },
      {
        title: 'Parliament can remove PM',
        explanation: 'Vote of no confidence can force resignation or election. Parliament supreme, PM subordinate. US president cannot be removed by Congress votes.'
      },
      {
        title: 'Cabinet not presidential staff',
        explanation: 'Cabinet ministers are politicians with own constituencies and ambitions. Not presidential appointees who serve at pleasure. Chancellor can challenge PM.'
      }
    ],
    synoptic_links: [
      'Compare US and UK executive structures',
      'Link to debates about prime ministerial power',
      'Connect to parliamentary vs presidential systems'
    ],
    examples: [
      {
        title: 'Leaders\' debates',
        context: 'Since 2010, televised debates between party leaders. Presidential-style personal contest. But leaders still MPs with constituency responsibilities.'
      },
      {
        title: 'PM removals',
        context: 'Thatcher 1990, May 2019 (effectively), Johnson 2022 all removed by party. No president could be ousted this way. Shows fundamental difference from presidential system.'
      }
    ],
    pitfalls: [
      'Distinguish between presidential style and presidential system',
      'Consider what "president" means - elected separately? fixed term?',
      'Reference specific features that are and aren\'t presidential'
    ]
  },
  {
    id: 'ma104',
    question_id: 'q104',
    arguments_for: [
      {
        title: 'Resignations still happen',
        explanation: 'Amber Rudd (Windrush), Priti Patel (Israel meetings), Sajid Javid (SpAds dispute) resigned. IMR still enforced in serious cases. Recent examples show convention lives.'
      },
      {
        title: 'Collective responsibility enforced',
        explanation: 'Ministers who publicly disagree are sacked or resign. Johnson sacked ministers who voted against government. Convention actively maintained.'
      },
      {
        title: 'Democratic accountability',
        explanation: 'Both doctrines serve accountability. IMR means ministers answer for departments; CMR means government has single position. Essential for parliamentary democracy.'
      },
      {
        title: 'Scandals punished',
        explanation: 'Matt Hancock resigned over COVID rule breach. Dominic Raab resigned over bullying inquiry. Ministers still face consequences for personal and professional failures.'
      }
    ],
    arguments_against: [
      {
        title: 'Fewer resignations for department failures',
        explanation: 'Resignation for civil service errors rare. Ministers blame officials. Windrush, Post Office scandal, PPE contracts - no ministerial resignation for policy failures.'
      },
      {
        title: 'Collective responsibility eroded',
        explanation: 'Brexit saw open Cabinet disagreement. May allowed "agree to differ". Johnson Cabinet members briefed against each other. Convention stretched to breaking.'
      },
      {
        title: 'Survival more common',
        explanation: 'Ministers cling on through scandals. Johnson survived multiple calls to resign. Patel survived bullying finding. Resignation only when position untenable.'
      },
      {
        title: 'PM protection matters most',
        explanation: 'Whether minister survives depends on PM support, not convention. PM protects allies, sacrifices enemies. Political calculation not constitutional principle.'
      }
    ],
    synoptic_links: [
      'Compare with other parliamentary systems',
      'Link to debates about accountability',
      'Connect to conventions and constitutional change'
    ],
    examples: [
      {
        title: 'Priti Patel bullying case',
        context: 'Independent inquiry found bullying occurred. Ministerial code breached. PM stood by Patel, adviser resigned instead. Shows PM can override findings.'
      },
      {
        title: 'Brexit Cabinet divisions',
        context: 'May Cabinet openly split between hard and soft Brexit positions. Ministers briefed against each other. CMR barely maintained.'
      }
    ],
    pitfalls: [
      'Distinguish between different types of responsibility',
      'Consider whether conventions have changed or just been tested',
      'Reference specific recent cases'
    ]
  },
  // UK Government - Relations Between Branches
  {
    id: 'ma105',
    question_id: 'q105',
    arguments_for: [
      {
        title: 'Government majorities',
        explanation: 'Cameron 2015, Johnson 2019 had working majorities. Government gets legislation through. Whipping ensures loyalty. Programme motions control debate.'
      },
      {
        title: 'Henry VIII powers expanded',
        explanation: 'Statutory instruments increased, allowing ministers to change law without full parliamentary scrutiny. Brexit, COVID used delegated legislation extensively.'
      },
      {
        title: 'Executive controls timetable',
        explanation: 'Government determines what Parliament debates and votes on. Opposition days limited. Backbenchers have little control over agenda.'
      },
      {
        title: 'Select committee limits',
        explanation: 'Committee recommendations can be ignored. No enforcement power. Government responds but often rejects findings. Scrutiny without sanction.'
      }
    ],
    arguments_against: [
      {
        title: 'Brexit Parliament asserted power',
        explanation: 'Commons took control of Brexit process 2019. May suffered historic defeats. Parliament refused to rubber-stamp government\'s Brexit approach.'
      },
      {
        title: 'Coalition constraints 2010-15',
        explanation: 'Coalition required cross-party negotiation. Lib Dems blocked Conservative policies. Executive power shared, not dominant.'
      },
      {
        title: 'Backbench rebellions increased',
        explanation: 'MPs more willing to defy whip than historically. Johnson faced significant rebellions despite majority. Party discipline less reliable.'
      },
      {
        title: 'Select committees strengthened',
        explanation: 'Wright reforms gave Commons control over chairs. Higher profile, more assertive committees. Treasury, Health, Home Affairs committees influential.'
      }
    ],
    synoptic_links: [
      'Compare with separation of powers systems',
      'Link to debates about parliamentary sovereignty',
      'Connect to executive power literature'
    ],
    examples: [
      {
        title: 'Meaningful vote',
        context: 'Commons demanded and got meaningful vote on Brexit deal. Three times rejected May\'s deal. Parliament controlled outcome on key issue.'
      },
      {
        title: 'COVID regulations',
        context: 'Many regulations passed with minimal or retrospective scrutiny. Executive dominated through emergency powers. Parliament marginalised during crisis.'
      }
    ],
    pitfalls: [
      'Distinguish between different periods and circumstances',
      'Consider what "dominated" means',
      'Reference specific examples of executive power and parliamentary assertion'
    ]
  },
  {
    id: 'ma106',
    question_id: 'q106',
    arguments_for: [
      {
        title: 'EU law supremacy',
        explanation: 'European Communities Act 1972 gave EU law priority over UK law. Factortame case 1990 confirmed courts must disapply conflicting UK statutes. Parliament couldn\'t legislate contrary to EU law.'
      },
      {
        title: 'Qualified majority voting',
        explanation: 'Many decisions made by QMV - UK could be outvoted. Laws imposed without UK consent. Sovereignty meaningless if outvoted.'
      },
      {
        title: 'ECJ jurisdiction',
        explanation: 'European Court of Justice final authority on EU law interpretation. UK courts bound by ECJ rulings. Foreign court supreme over domestic.'
      },
      {
        title: 'Regulations directly applicable',
        explanation: 'EU regulations became UK law automatically, without parliamentary approval. Parliament had no say on significant body of law.'
      }
    ],
    arguments_against: [
      {
        title: 'Parliament chose membership',
        explanation: 'UK joined voluntarily, could leave (and did). EU law supremacy existed because Parliament enacted ECA 1972. Parliamentary sovereignty used to accept EU membership.'
      },
      {
        title: 'Miller I confirmed Parliament supreme',
        explanation: '2017 Supreme Court ruled Parliament must approve Article 50 notification. Courts confirmed Parliament, not government, controlled EU withdrawal. Sovereignty resided in Parliament.'
      },
      {
        title: 'UK influenced EU law',
        explanation: 'UK had commissioner, MEPs, Council votes. Single market was UK project. UK shaped rules it followed. Not passive recipient of foreign law.'
      },
      {
        title: 'Brexit proved sovereignty retained',
        explanation: 'UK left EU unilaterally. Parliament repealed ECA. If sovereignty had been lost, withdrawal wouldn\'t have been possible. EU membership was revocable delegation.'
      }
    ],
    synoptic_links: [
      'Compare with devolution and sovereignty',
      'Link to Dicey\'s doctrine of parliamentary sovereignty',
      'Connect to debates about constitutional reform'
    ],
    examples: [
      {
        title: 'Factortame case 1990',
        context: 'House of Lords disapplied UK statute conflicting with EU law. First time UK court set aside Act of Parliament. Landmark challenge to sovereignty.'
      },
      {
        title: 'Brexit',
        context: 'UK withdrew from EU through parliamentary process. European Union (Withdrawal) Act 2018 repealed ECA 1972. Parliament recovered any sovereignty it had delegated.'
      }
    ],
    pitfalls: [
      'Distinguish between legal and political sovereignty',
      'Consider whether sovereignty was "undermined" or "pooled"',
      'Reference specific cases and legislative developments'
    ]
  },
  {
    id: 'ma107',
    question_id: 'q107',
    arguments_for: [
      {
        title: 'Brexit restored sovereignty',
        explanation: 'EU withdrawal means no more EU law supremacy, ECJ jurisdiction, or qualified majority voting. Parliament is supreme law-making body again.'
      },
      {
        title: 'Parliament can make any law',
        explanation: 'Dicey\'s doctrine: Parliament can make or unmake any law. No body can override Parliament. Human Rights Act can be repealed; devolution can be reversed.'
      },
      {
        title: 'No entrenched constitutional limits',
        explanation: 'Unlike US, no constitutional court can strike down legislation. Supreme Court can interpret but not invalidate Acts of Parliament. Parliamentary supremacy preserved.'
      },
      {
        title: 'Conventions support sovereignty',
        explanation: 'Sewel Convention, Salisbury Convention recognise Parliament\'s supreme position. Conventions constrain but don\'t legally limit parliamentary sovereignty.'
      }
    ],
    arguments_against: [
      {
        title: 'Devolution created alternative centres',
        explanation: 'Scottish Parliament, Welsh Senedd, Northern Ireland Assembly have democratic legitimacy. Sewel Convention limits Westminster intervention. Political constraints on sovereignty.'
      },
      {
        title: 'Human Rights Act constraints',
        explanation: 'Courts must interpret legislation compatibly with ECHR. Declarations of incompatibility create political pressure. Rights culture limits parliamentary freedom.'
      },
      {
        title: 'Judicial review expanded',
        explanation: 'Miller cases, Belmarsh, UNISON showed courts willing to constrain government. Judicial interpretation limits what Parliament can effectively do.'
      },
      {
        title: 'Popular sovereignty claims',
        explanation: 'Referendums create competing source of legitimacy. Brexit referendum treated as binding though advisory. People, not Parliament, seen as ultimate sovereign.'
      }
    ],
    synoptic_links: [
      'Compare with constitutionally limited legislatures',
      'Link to Dicey and modern sovereignty debates',
      'Connect to judicial review and rights protection'
    ],
    examples: [
      {
        title: 'Miller I',
        context: 'Supreme Court ruled Parliament must approve Article 50 notification. Government couldn\'t use prerogative alone. Shows judicial enforcement of parliamentary sovereignty.'
      },
      {
        title: 'Scottish independence',
        context: 'If Scotland voted for independence, could Westminster refuse? Legal sovereignty exists but political sovereignty may have transferred. Practical limits to parliamentary supremacy.'
      }
    ],
    pitfalls: [
      'Distinguish legal sovereignty from political reality',
      'Consider whether sovereignty can be "sole" when subject to conventions',
      'Reference specific challenges to parliamentary sovereignty'
    ]
  },
  // UK Government - The Supreme Court
  {
    id: 'ma108',
    question_id: 'q108',
    arguments_for: [
      {
        title: 'Miller cases constrained government',
        explanation: 'Miller I (2017) required parliamentary approval for Article 50. Miller II (2019) ruled prorogation unlawful. Court directly limited PM\'s executive power.'
      },
      {
        title: 'Judicial review expanded',
        explanation: 'Courts more willing to review executive decisions. UNISON struck down tribunal fees. Judicial review claims increased. Executive subject to more legal challenge.'
      },
      {
        title: 'Human Rights Act empowers courts',
        explanation: 'Courts must interpret legislation compatibly with ECHR. Can declare statutes incompatible. Creates political pressure to change law. Shifts power to judiciary.'
      },
      {
        title: 'Government criticism of judges',
        explanation: '"Enemies of the people" headline after Miller I. Government proposals to limit judicial review. Ministers complain about judicial activism. Shows government feels constrained.'
      }
    ],
    arguments_against: [
      {
        title: 'Courts uphold rule of law',
        explanation: 'Judicial review ensures executive acts legally, within powers, following fair procedures. This is proper judicial function, not overreach. Rule of law requires judicial enforcement.'
      },
      {
        title: 'Parliament remains sovereign',
        explanation: 'Courts cannot strike down Acts of Parliament. Declarations of incompatibility don\'t invalidate legislation. Ultimate power remains with Parliament.'
      },
      {
        title: 'Government usually wins',
        explanation: 'Most judicial review claims fail. Government wins majority of cases. High-profile losses distort picture. Executive power not seriously constrained.'
      },
      {
        title: 'Separation of powers requires judicial independence',
        explanation: 'Independent courts checking executive is feature not bug. Constitutional Reform Act 2005 institutionalised separation. Democracy requires executive accountability.'
      }
    ],
    synoptic_links: [
      'Compare with US Supreme Court',
      'Link to debates about judicial activism',
      'Connect to separation of powers'
    ],
    examples: [
      {
        title: 'Miller/Cherry 2019',
        context: 'Court ruled prorogation unlawful. Unprecedented intervention in parliamentary affairs. Government forced to reconvene Parliament. Shows judicial power over executive.'
      },
      {
        title: 'Rwanda policy litigation',
        context: 'Courts initially blocked Rwanda deportations. Supreme Court ruled policy unlawful. Government responded with legislation. Shows judicial-executive tension.'
      }
    ],
    pitfalls: [
      'Distinguish between proper judicial function and overreach',
      'Consider whether influence is too much or appropriate',
      'Reference specific cases and their outcomes'
    ]
  },
  {
    id: 'ma109',
    question_id: 'q109',
    arguments_for: [
      {
        title: 'Constitutional Reform Act 2005',
        explanation: 'Created Supreme Court separate from legislature. Established Judicial Appointments Commission. Institutionalised judicial independence. Modern, reformed system.'
      },
      {
        title: 'Security of tenure',
        explanation: 'Judges can only be removed by address of both Houses. Salaries protected. Cannot be punished for decisions. Independence structurally guaranteed.'
      },
      {
        title: 'Appointments process',
        explanation: 'JAC selects judges on merit. Less political than US confirmation process. No parliamentary hearings on ideology. Professional selection.'
      },
      {
        title: 'Judicial restraint',
        explanation: 'Court respects parliamentary sovereignty. Doesn\'t strike down legislation. Defers to political branches on policy. Miller cases were about process not policy.'
      }
    ],
    arguments_against: [
      {
        title: 'Lack of diversity',
        explanation: 'Supreme Court justices predominantly white, male, Oxbridge-educated. Narrow social background. May share assumptions limiting neutrality. Doesn\'t reflect society.'
      },
      {
        title: 'Political decisions',
        explanation: 'Miller cases, prorogation ruling were inherently political. Court made political judgments about constitutional conventions. Neutrality impossible on such questions.'
      },
      {
        title: 'Unelected power',
        explanation: 'Judges make decisions affecting millions without democratic mandate. Rights interpretation involves political choices. Unaccountable power concerning in democracy.'
      },
      {
        title: 'Government appointment influence',
        explanation: 'Lord Chancellor still involved in appointments. PM appoints to JAC. Senior judicial appointments have political element. Not fully independent.'
      }
    ],
    synoptic_links: [
      'Compare with US Supreme Court appointments',
      'Link to debates about judicial activism',
      'Connect to rule of law and democracy'
    ],
    examples: [
      {
        title: 'Miller II',
        context: 'Unanimous 11-0 ruling against government. Demonstrated judicial willingness to constrain executive. But also showed court acting together, suggesting shared perspective.'
      },
      {
        title: 'Supreme Court diversity',
        context: 'Two women out of 12 justices. One ethnic minority justice. Diversity improving but still limited. Appointments from narrow pool of senior lawyers.'
      }
    ],
    pitfalls: [
      'Distinguish independence from neutrality',
      'Consider what sufficient independence means',
      'Reference specific concerns and reforms'
    ]
  },
  {
    id: 'ma110',
    question_id: 'q110',
    arguments_for: [
      {
        title: 'Miller I protected parliamentary role',
        explanation: '2017 ruling required Parliament to approve Article 50 notification. Government wanted to act alone using prerogative. Court ensured Parliament controlled Brexit process.'
      },
      {
        title: 'Miller II restored Parliament',
        explanation: '2019 ruling found prorogation unlawful, allowing Parliament to sit and scrutinise Brexit. Executive attempt to bypass Parliament stopped by judiciary.'
      },
      {
        title: 'Enforces constitutional conventions',
        explanation: 'Court interprets and applies conventions, strengthening them. Without judicial enforcement, conventions depend only on political goodwill. Court gives them legal force.'
      },
      {
        title: 'Checks executive overreach',
        explanation: 'By constraining executive use of prerogative, court protects Parliament\'s exclusive legislative role. Executive cannot bypass Parliament with judicial check.'
      }
    ],
    arguments_against: [
      {
        title: 'Judges make political decisions',
        explanation: 'Court determined political questions about when Parliament should sit, what Brexit process should be. Judicial power over political matters is transfer from elected to unelected.'
      },
      {
        title: 'Court as third player',
        explanation: 'Miller cases put court between Parliament and government. Creates judicial role in political disputes. Third actor in constitution changes power balance.'
      },
      {
        title: 'Parliamentary sovereignty doesn\'t need court protection',
        explanation: 'Parliament could have refused to accept executive action. Sovereignty is political, not legal. Court intervention changes the nature of sovereignty.'
      },
      {
        title: 'Future executive constrained',
        explanation: 'Court rulings bind future governments. Executive flexibility reduced. Parliament\'s legislation can be interpreted narrowly. Both branches constrained by judiciary.'
      }
    ],
    synoptic_links: [
      'Compare with constitutional courts internationally',
      'Link to Dicey\'s conception of sovereignty',
      'Connect to separation of powers'
    ],
    examples: [
      {
        title: 'Miller I',
        context: 'Court ruled prerogative couldn\'t be used to remove rights. Parliament must authorise. Strengthened parliamentary role in Brexit but through judicial intervention.'
      },
      {
        title: 'Miller II',
        context: 'Court invented justiciability of prorogation. Created new constitutional principle. Expanded judicial power even while protecting Parliament.'
      }
    ],
    pitfalls: [
      'Consider whether court strengthening Parliament also strengthens itself',
      'Distinguish between supporting Parliament and controlling it',
      'Reference specific rulings and their reasoning'
    ]
  },
  {
    id: 'ma111',
    question_id: 'q111',
    arguments_for: [
      {
        title: 'Miller cases expanded jurisdiction',
        explanation: 'Court ruled on matters previously considered political. Prorogation justiciability was novel. Expanded what courts will review. Power creep.'
      },
      {
        title: 'Human Rights Act empowers judges',
        explanation: 'Courts interpret rights, determine compatibility, shape legislation through interpretation. Rights adjudication involves political choices by unelected judges.'
      },
      {
        title: 'Judicial review of legislation',
        explanation: 'Though cannot strike down statutes, courts can interpret them restrictively. UNISON showed willingness to limit Parliament\'s intentions. Effective judicial veto.'
      },
      {
        title: 'No accountability',
        explanation: 'Judges appointed for life, cannot be removed for decisions, face no electoral sanction. Unaccountable power growing.'
      }
    ],
    arguments_against: [
      {
        title: 'Rule of law requires judicial enforcement',
        explanation: 'Someone must determine whether government acts lawfully. Courts are natural institution for this. Without judicial check, rule of law is empty.'
      },
      {
        title: 'Parliament remains supreme',
        explanation: 'Courts cannot overturn Acts of Parliament. Can only interpret and declare incompatibility. Parliament can legislate to override judicial decisions.'
      },
      {
        title: 'Separation of powers normal',
        explanation: 'Independent judiciary checking executive is standard democratic feature. UK was unusual in lacking clear separation. CRA 2005 brought UK into line.'
      },
      {
        title: 'Government wins most cases',
        explanation: 'High-profile losses distort picture. Judicial review claims usually fail. Executive retains enormous power. Judiciary not seriously threatening government.'
      }
    ],
    synoptic_links: [
      'Compare with other common law judiciaries',
      'Link to debates about democratic accountability',
      'Connect to separation of powers'
    ],
    examples: [
      {
        title: 'Judicial Review and Courts Act 2022',
        context: 'Government legislation to limit judicial review. Cart reviews restricted. Shows government concerned about judicial power. Legislation can constrain courts.'
      },
      {
        title: 'Rwanda policy',
        context: 'Supreme Court ruled policy unlawful. Government passed legislation to override ruling. Shows judicial decisions can be reversed. Parliament remains supreme.'
      }
    ],
    pitfalls: [
      'Distinguish legitimate judicial role from overreach',
      'Consider what "too powerful" means - compared to what?',
      'Reference specific examples and responses'
    ]
  },
  // Political Ideas - Anarchism
  {
    id: 'ma112',
    question_id: 'q112',
    arguments_for: [
      {
        title: 'All reject state authority over individuals',
        explanation: 'Collectivist and individualist anarchists unite in rejecting state coercion. Bakunin and Stirner both see state as oppressive. Individual freedom from political authority is common ground.'
      },
      {
        title: 'Belief in natural order',
        explanation: 'Kropotkin\'s mutual aid and Proudhon\'s federalism both assume humans can cooperate without state compulsion. Society can self-organise. State is unnecessary imposition.'
      },
      {
        title: 'Voluntary association',
        explanation: 'All anarchists favour voluntary rather than coerced relationships. Whether communes or markets, association should be chosen not imposed. Freedom of association fundamental.'
      },
      {
        title: 'Rejection of hierarchy',
        explanation: 'Goldman\'s anarcha-feminism, Bakunin\'s anti-statism, Stirner\'s egoism all oppose imposed hierarchy. Individuals should relate as equals not superiors/subordinates.'
      }
    ],
    arguments_against: [
      {
        title: 'Collectivist vs individualist divide',
        explanation: 'Kropotkin\'s communism emphasises community; Stirner\'s egoism prioritises individual self-interest. Fundamental disagreement about whether society or individual is primary.'
      },
      {
        title: 'Property disagreements',
        explanation: 'Proudhon said "property is theft" but defended possession. Stirner defended property as ego\'s expression. Anarcho-capitalists defend absolute property rights. Major division.'
      },
      {
        title: 'Different conceptions of freedom',
        explanation: 'Collectivists see freedom in social cooperation; individualists see freedom from all social obligations. Positive vs negative liberty. Incompatible visions.'
      },
      {
        title: 'Economic organisation disputes',
        explanation: 'Kropotkin\'s communism vs mutualist markets vs anarcho-capitalism. Radically different economic visions. Not just details but fundamentals of how society should work.'
      }
    ],
    synoptic_links: [
      'Compare with liberal conceptions of individual and society',
      'Link to socialist debates about collectivism',
      'Connect to conservative organic society'
    ],
    examples: [
      {
        title: 'Kropotkin vs Stirner',
        context: 'Kropotkin\'s Mutual Aid emphasised natural human cooperation in society. Stirner\'s The Ego and Its Own rejected all obligations to society. Opposite views of individual-society relationship.'
      },
      {
        title: 'Spanish Civil War anarchism',
        context: 'CNT-FAI in Spain 1936-39 attempted collectivist anarchism with worker-controlled industries and communes. Showed collectivist vision in practice.'
      }
    ],
    pitfalls: [
      'Use at least two named thinkers from specification',
      'Compare different strands explicitly',
      'Don\'t oversimplify complex positions'
    ]
  },
  {
    id: 'ma113',
    question_id: 'q113',
    arguments_for: [
      {
        title: 'Collectivist common ownership',
        explanation: 'Kropotkin\'s anarcho-communism envisions common ownership of means of production, distribution according to need. Bakunin\'s collectivism similar. Society-centred vision.'
      },
      {
        title: 'Individualist private property',
        explanation: 'Stirner defended individual property as extension of ego. Proudhon defended possession while rejecting capitalist property. Anarcho-capitalists want full property rights and markets.'
      },
      {
        title: 'Market vs non-market economy',
        explanation: 'Mutualists and anarcho-capitalists see role for markets. Anarcho-communists reject markets entirely for "from each according to ability, to each according to need." Incompatible economics.'
      },
      {
        title: 'Scale and organisation differences',
        explanation: 'Kropotkin envisioned federated communes. Stirner wanted "union of egoists" - temporary, fluid associations. Very different social structures imagined.'
      }
    ],
    arguments_against: [
      {
        title: 'All reject state',
        explanation: 'Future society for all anarchists is stateless. No coercive political authority. This common negative vision (what they oppose) creates unity despite positive disagreements.'
      },
      {
        title: 'All favour voluntary association',
        explanation: 'Whether communes, markets, or unions of egoists, relationships should be voluntary. Rejection of coercion unites different visions of how free people would organise.'
      },
      {
        title: 'Federalism shared',
        explanation: 'Proudhon, Bakunin, Kropotkin all favoured federated structures. Bottom-up organisation, local autonomy, voluntary cooperation at larger scales. Common organisational principle.'
      },
      {
        title: 'Agreement on what to destroy',
        explanation: 'Revolution, direct action, destruction of state apparatus - anarchists agree on how to get to future society even if they disagree on what it looks like.'
      }
    ],
    synoptic_links: [
      'Compare with Marxist vision of communist society',
      'Link to liberal and conservative views on property',
      'Connect to debates about economic organisation'
    ],
    examples: [
      {
        title: 'Kropotkin\'s The Conquest of Bread',
        context: 'Detailed vision of anarcho-communist society with common ownership, local communes, federated organisation. Highly specified collectivist future.'
      },
      {
        title: 'Rothbard\'s anarcho-capitalism',
        context: 'Private property, free markets, private defence agencies. Completely different from Kropotkin - market not commune, property not sharing.'
      }
    ],
    pitfalls: [
      'Specify what aspects of future society you\'re comparing',
      'Use thinkers from different strands',
      'Don\'t just describe - analyse agreements and disagreements'
    ]
  },
  {
    id: 'ma114',
    question_id: 'q114',
    arguments_for: [
      {
        title: 'Optimism about human nature',
        explanation: 'Kropotkin\'s Mutual Aid argued humans naturally cooperative. Evolution favours cooperation not competition. Bakunin saw humans as capable of self-governance. Positive view shared.'
      },
      {
        title: 'State corrupts natural goodness',
        explanation: 'Anarchists agree humans would be good without state coercion. State creates inequality, violence, alienation. Remove state and natural cooperativeness emerges.'
      },
      {
        title: 'Belief in human rationality',
        explanation: 'Godwin saw humans as perfectible through reason. Anarchists generally believe humans can recognise mutual interests and cooperate rationally without compulsion.'
      },
      {
        title: 'Rejection of conservative pessimism',
        explanation: 'Against Hobbes and Burke, anarchists deny humans need authority to prevent chaos. Human nature doesn\'t require coercion. United in rejecting pessimistic justification for state.'
      }
    ],
    arguments_against: [
      {
        title: 'Stirner\'s egoism',
        explanation: 'Stirner saw humans as self-interested egos. Not cooperative by nature but pursuing individual desires. Different from Kropotkin\'s social beings. Human nature is selfish.'
      },
      {
        title: 'Different sources of cooperation',
        explanation: 'Kropotkin saw cooperation as instinctive; Proudhon saw it arising from rational self-interest; Stirner didn\'t value cooperation at all. Different explanations of human behaviour.'
      },
      {
        title: 'Moral vs amoral views',
        explanation: 'Goldman and Kropotkin believed in innate moral sense. Stirner rejected morality entirely as "spook" constraining ego. Fundamental disagreement on human moral nature.'
      },
      {
        title: 'Individual vs social nature',
        explanation: 'Collectivists see humans as social beings; individualists see humans as distinct individuals first. Human nature is social (Kropotkin) or individual (Stirner) - can\'t be both.'
      }
    ],
    synoptic_links: [
      'Compare with conservative pessimistic view of human nature',
      'Link to liberal rationalist conception',
      'Connect to socialist view of human nature under capitalism'
    ],
    examples: [
      {
        title: 'Kropotkin\'s Mutual Aid',
        context: 'Scientific argument that evolution favours cooperation. Animals and humans survive through mutual support not competition. Human nature is cooperative.'
      },
      {
        title: 'Stirner\'s The Ego and Its Own',
        context: 'Rejected all claims on the individual including morality and society. Human nature is egoistic self-assertion. Radically different from Kropotkin.'
      }
    ],
    pitfalls: [
      'Must use named thinkers',
      'Compare specific views on human nature',
      'Avoid overgeneralising about "anarchists"'
    ]
  },
  {
    id: 'ma115',
    question_id: 'q115',
    arguments_for: [
      {
        title: 'Historical examples',
        explanation: 'Spanish Civil War anarchism (CNT-FAI), Paris Commune, Zapatistas show anarchist principles can be implemented. Not just theory but practice. Temporary successes prove possibility.'
      },
      {
        title: 'Human nature supports it',
        explanation: 'If Kropotkin\'s mutual aid thesis is correct, anarchism works with human nature not against it. Cooperation is natural; coercion unnatural. Anarchism aligns with evolution.'
      },
      {
        title: 'Prefigurative politics',
        explanation: 'Anarchist organisations today (cooperatives, communes, mutual aid networks) demonstrate workability. Building new society in shell of old. Incrementally realistic.'
      },
      {
        title: 'State failures evident',
        explanation: 'State violence, war, inequality, environmental destruction show state systems failing. Anarchism addresses root causes. Current system unrealistic, not anarchism.'
      }
    ],
    arguments_against: [
      {
        title: 'No sustained example',
        explanation: 'Spanish anarchism crushed by fascists and communists. All attempts quickly suppressed or failed. No long-term anarchist society has existed. History against feasibility.'
      },
      {
        title: 'Free rider problems',
        explanation: 'Without enforcement, individuals can exploit collective goods. Kropotkin\'s voluntary cooperation assumes away this problem. Rational self-interest undermines anarchism.'
      },
      {
        title: 'Security dilemma',
        explanation: 'In anarchist world, how prevent aggression? Organised violence (states, gangs) would dominate disorganised peaceful communities. Defence requires organisation anarchism rejects.'
      },
      {
        title: 'Scale problems',
        explanation: 'Small communities might work anarchically but modern complex society requires coordination anarchism cannot provide. Infrastructure, healthcare, technology need organisation.'
      }
    ],
    synoptic_links: [
      'Compare with Marxist view of communist transition',
      'Link to conservative critique of utopianism',
      'Connect to liberal reformism'
    ],
    examples: [
      {
        title: 'Spanish Revolution 1936-39',
        context: 'Worker-controlled factories, agricultural collectives, militia rather than army. Showed anarchism workable but crushed by superior military forces. Success and failure both instructive.'
      },
      {
        title: 'Rojava',
        context: 'Kurdish region in Syria implementing democratic confederalism influenced by anarchism. Ongoing example but in exceptional war conditions.'
      }
    ],
    pitfalls: [
      'Use named thinkers to explain anarchist vision',
      'Consider both theoretical and practical obstacles',
      'Reference historical examples'
    ]
  },
  {
    id: 'ma116',
    question_id: 'q116',
    arguments_for: [
      {
        title: 'Kropotkin\'s mutual aid idealistic',
        explanation: 'Assumption that humans are naturally cooperative contradicts evidence of conflict, violence, selfishness throughout history. Anarchism requires human nature to change or be different than it is.'
      },
      {
        title: 'No enforcement mechanism',
        explanation: 'Without state coercion, how prevent exploitation, violence, free-riding? Anarchism assumes problems away. Utopian in ignoring difficult questions.'
      },
      {
        title: 'Historical failure',
        explanation: 'No sustained anarchist society has existed. All attempts quickly failed or were crushed. If workable, would have succeeded somewhere. Utopianism proven by history.'
      },
      {
        title: 'Stirner\'s egoism contradicts collectivism',
        explanation: 'If humans are really egoists (Stirner), collectivist anarchism is utopian. If humans are really cooperative (Kropotkin), individualist anarchism is utopian. Anarchism internally contradictory.'
      }
    ],
    arguments_against: [
      {
        title: 'Scientific basis in Kropotkin',
        explanation: 'Mutual Aid offered empirical evidence from biology and anthropology. Cooperation is evolutionary advantage. Not mere optimism but scientific claim about human nature.'
      },
      {
        title: 'State distorts human nature',
        explanation: 'Current human behaviour reflects state-created conditions. Competition, violence, selfishness are products of capitalism and state, not inherent. Remove causes, change behaviour.'
      },
      {
        title: 'Historical examples exist',
        explanation: 'Spanish collectives, Paris Commune, indigenous societies without states show anarchism can work. Not utopian if it has actually been practiced.'
      },
      {
        title: 'Gradualist approaches possible',
        explanation: 'Proudhon\'s mutualism, gradual building of cooperative structures. Don\'t need revolutionary transformation. Prefigurative politics is realistic not utopian.'
      }
    ],
    synoptic_links: [
      'Compare with Marxist critique of utopianism',
      'Link to conservative view of human imperfection',
      'Connect to liberal belief in progress'
    ],
    examples: [
      {
        title: 'Kropotkin\'s Mutual Aid',
        context: 'Argued cooperation is evolutionary advantage, documented in animal and human societies. Claimed scientific basis for anarchist optimism about human nature.'
      },
      {
        title: 'Goldman\'s practical anarchism',
        context: 'Emma Goldman combined theory with activism. Believed in immediate practical action not waiting for utopia. Anarchism as lived practice not abstract ideal.'
      }
    ],
    pitfalls: [
      'Define what makes a view "utopian"',
      'Use thinkers to illustrate both sides',
      'Consider whether scientific claims answer utopian charge'
    ]
  },
  {
    id: 'ma117',
    question_id: 'q117',
    arguments_for: [
      {
        title: 'Collectivist anarchists agree',
        explanation: 'Bakunin and Kropotkin both advocated collective ownership of means of production. Workers control, common property, distribution by contribution (Bakunin) or need (Kropotkin).'
      },
      {
        title: 'Proudhon\'s mutualism included commons',
        explanation: 'While defending possession, Proudhon saw some common ownership as necessary. Banking, utilities, large enterprises should be mutually owned. Not pure private property.'
      },
      {
        title: 'Rejection of capitalist private property',
        explanation: 'Almost all anarchists reject capitalist ownership. Proudhon\'s "property is theft" condemns exploitation through ownership. United against capitalism even if differing on alternatives.'
      },
      {
        title: 'Goldman supported collectivism',
        explanation: 'Anarcha-feminist Emma Goldman advocated collective ownership alongside individual freedom. Saw collective economics as compatible with personal liberty.'
      }
    ],
    arguments_against: [
      {
        title: 'Stirner defended property',
        explanation: 'Stirner saw property as ego\'s expression. What individual can take and hold is theirs. No common ownership, only individual appropriation. Rejects collectivist economics.'
      },
      {
        title: 'Anarcho-capitalism opposes common ownership',
        explanation: 'Rothbard and anarcho-capitalists want absolute private property rights. Free markets, no collective ownership. Directly contradicts collectivist anarchists.'
      },
      {
        title: 'Proudhon distinguished possession from property',
        explanation: 'Mutualism allows individual possession but not exploitative property. Nuanced position between full common ownership and private property. Not simply collectivist.'
      },
      {
        title: 'Different forms of common ownership',
        explanation: 'Even collectivists disagree - Bakunin\'s distribution by contribution differs from Kropotkin\'s distribution by need. Common ownership takes different forms.'
      }
    ],
    synoptic_links: [
      'Compare with Marxist view of common ownership',
      'Link to liberal defence of private property',
      'Connect to conservative organic property'
    ],
    examples: [
      {
        title: 'Spanish collectives 1936-39',
        context: 'Worker-controlled factories and agricultural communes implemented collectivist anarchist economics. Common ownership in practice.'
      },
      {
        title: 'Proudhon\'s mutualism',
        context: 'Proposed mutual banks, workers\' associations, federated communes. Mix of individual possession and collective institutions. Not pure collectivism.'
      }
    ],
    pitfalls: [
      'Distinguish different anarchist positions on property',
      'Use specific thinkers',
      'Consider individualist as well as collectivist positions'
    ]
  },
  {
    id: 'ma118',
    question_id: 'q118',
    arguments_for: [
      {
        title: 'Universal anti-statism',
        explanation: 'All anarchists reject state. Bakunin, Kropotkin, Stirner, Proudhon, Goldman all see state as inherently oppressive. Central defining feature of anarchism. Complete unity.'
      },
      {
        title: 'State as source of coercion',
        explanation: 'All anarchists see state as coercive institution. Whether from collectivist or individualist perspective, state compels obedience through force. Coercion is wrong for all.'
      },
      {
        title: 'State creates inequality',
        explanation: 'Anarchists agree state protects privilege - whether capitalist property (collectivists) or social constraints (individualists). State maintains unjust hierarchies.'
      },
      {
        title: 'State corrupts',
        explanation: 'Power corrupts those who hold it. Bakunin\'s critique of Marxist dictatorship of proletariat shows all anarchists distrust concentrated power. State cannot be reformed.'
      }
    ],
    arguments_against: [
      {
        title: 'Different reasons for opposing',
        explanation: 'Collectivists oppose state because it serves capitalism. Individualists oppose state because it constrains ego. Same conclusion but different reasoning affects implications.'
      },
      {
        title: 'Different priorities',
        explanation: 'Kropotkin prioritised abolishing capitalism; Stirner prioritised individual liberation. Which to attack first, how to organise opposition, differ between strands.'
      },
      {
        title: 'Varied views on intermediate steps',
        explanation: 'Proudhon accepted gradual reform through mutual institutions. Bakunin wanted revolutionary destruction. Method of opposing state differs significantly.'
      },
      {
        title: 'Anarcho-capitalism wants some state-like institutions',
        explanation: 'Private defence agencies, courts, enforcement of contracts - anarcho-capitalists accept institutions resembling state functions. Opposition to state less absolute.'
      }
    ],
    synoptic_links: [
      'Compare with Marxist view of state',
      'Link to liberal limited state',
      'Connect to conservative organic state'
    ],
    examples: [
      {
        title: 'Bakunin vs Marx',
        context: 'Bakunin rejected Marx\'s dictatorship of proletariat, arguing any state would become tyrannical. Shows anarchist anti-statism extends to revolutionary state.'
      },
      {
        title: 'Stirner\'s The Ego and Its Own',
        context: 'Rejected state as "spook" constraining individual ego. Opposition to state from radically individualist perspective, different from collectivist reasoning but same conclusion.'
      }
    ],
    pitfalls: [
      'Explain why each thinker opposes state',
      'Consider whether unity in conclusion means unity in analysis',
      'Use range of thinkers'
    ]
  },
  {
    id: 'ma119',
    question_id: 'q119',
    arguments_for: [
      {
        title: 'Stateless society',
        explanation: 'All anarchists envision society without state. No coercive political authority. This negative vision (absence of state) is common to all strands. Unity on fundamental feature.'
      },
      {
        title: 'Voluntary association',
        explanation: 'Ideal society based on voluntary not coerced relationships. Proudhon\'s federalism, Kropotkin\'s communes, Stirner\'s "union of egoists" - all voluntary. Common principle.'
      },
      {
        title: 'Decentralisation',
        explanation: 'All anarchists oppose centralised power. Federalism, local autonomy, bottom-up organisation shared across strands. Small-scale, face-to-face communities valued.'
      },
      {
        title: 'Freedom as core value',
        explanation: 'Individual freedom from coercion is paramount. Whether collectivist or individualist, anarchists agree freedom is highest value their ideal society maximises.'
      }
    ],
    arguments_against: [
      {
        title: 'Economic systems radically differ',
        explanation: 'Kropotkin\'s communist distribution vs Proudhon\'s mutualist markets vs anarcho-capitalist free markets. Fundamental disagreement on economic organisation of ideal society.'
      },
      {
        title: 'Property arrangements incompatible',
        explanation: 'Common ownership (collectivists) vs individual possession (mutualists) vs private property (anarcho-capitalists). Can\'t all be ideal; mutually exclusive visions.'
      },
      {
        title: 'Social vs individual emphasis',
        explanation: 'Kropotkin\'s communes are social; Stirner\'s "union of egoists" is temporary, individual-centred. Different conceptions of how people relate in ideal society.'
      },
      {
        title: 'Different views on human nature in ideal society',
        explanation: 'Collectivists assume cooperative behaviour; individualists assume self-interested behaviour. Ideal society reflects different assumptions about how freed humans would act.'
      }
    ],
    synoptic_links: [
      'Compare with Marxist communist society',
      'Link to liberal ideal of limited state',
      'Connect to conservative organic community'
    ],
    examples: [
      {
        title: 'Kropotkin\'s The Conquest of Bread',
        context: 'Detailed description of anarcho-communist society: common ownership, local communes, federated organisation, distribution by need.'
      },
      {
        title: 'Stirner\'s union of egoists',
        context: 'Temporary, fluid associations of individuals pursuing self-interest. Very different from stable communes - no common good, only coinciding individual interests.'
      }
    ],
    pitfalls: [
      'Specify what aspects of ideal society you\'re comparing',
      'Use thinkers from different strands',
      'Consider both positive and negative aspects of ideal'
    ]
  },
  {
    id: 'ma120',
    question_id: 'q120',
    arguments_for: [
      {
        title: 'All oppose existing state',
        explanation: 'Every anarchist thinker opposes current state structures. Bakunin, Proudhon, Kropotkin, Stirner, Goldman all see state as oppressive. Defining feature of ideology.'
      },
      {
        title: 'State as inherently coercive',
        explanation: 'All anarchists see state as fundamentally based on force. Cannot be reformed, only abolished. Coercion is essence of state, not accidental feature.'
      },
      {
        title: 'State serves ruling class',
        explanation: 'Whether capitalists (collectivist view) or any elite (individualist view), anarchists agree state protects privilege against ordinary people.'
      },
      {
        title: 'No good state possible',
        explanation: 'Unlike liberals or socialists, anarchists don\'t believe in reforming state. Any state, however democratic or socialist, would be oppressive. Unity in rejection.'
      }
    ],
    arguments_against: [
      {
        title: 'Different reasons for opposition',
        explanation: 'Kropotkin opposed state as servant of capitalism; Stirner opposed it as constraint on ego. Economic vs individual freedom emphasis. Different analyses.'
      },
      {
        title: 'Varied views on what replaces state',
        explanation: 'If state is defined by contrast to what replaces it, different alternatives (communes, markets, unions of egoists) imply different understandings of what state is.'
      },
      {
        title: 'Disagreement on methods',
        explanation: 'Proudhon accepted gradual change; Bakunin demanded revolution. Different views on how to oppose state reflect different assessments of its nature.'
      },
      {
        title: 'Anarcho-capitalism ambiguous',
        explanation: 'Some argue anarcho-capitalists want state-like private institutions. Whether they truly oppose "state" depends on definition. Boundary disputes.'
      }
    ],
    synoptic_links: [
      'Compare with Marxist view of state as class instrument',
      'Link to liberal view of state as necessary evil',
      'Connect to conservative organic state'
    ],
    examples: [
      {
        title: 'Bakunin\'s Statism and Anarchy',
        context: 'Argued any state, including workers\' state, would become tyrannical. Critique of Marxist state showed anarchist consistency in opposing all states.'
      },
      {
        title: 'Goldman\'s practical anarchism',
        context: 'Opposed state through direct action, propaganda, and building alternative institutions. Combined theory and practice of anti-statism.'
      }
    ],
    pitfalls: [
      'Consider whether agreement on conclusion means agreement on analysis',
      'Use multiple thinkers',
      'Define what "the state" means to different anarchists'
    ]
  },
  {
    id: 'ma121',
    question_id: 'q121',
    arguments_for: [
      {
        title: 'Collectivists favour social ownership',
        explanation: 'Bakunin and Kropotkin advocated collective ownership of means of production. Economic freedom means freedom from capitalist exploitation through common ownership.'
      },
      {
        title: 'Individualists favour property',
        explanation: 'Stirner defended property as ego\'s expression. Proudhon defended individual possession. Anarcho-capitalists want absolute property rights. Economic freedom through ownership.'
      },
      {
        title: 'Opposite views on markets',
        explanation: 'Kropotkin rejected markets for communist distribution. Proudhon and anarcho-capitalists embrace markets. Fundamental disagreement on economic mechanism.'
      },
      {
        title: 'Different freedom concepts',
        explanation: 'Collectivists see economic freedom as freedom from exploitation; individualists see it as freedom to own and trade. Positive vs negative economic liberty.'
      }
    ],
    arguments_against: [
      {
        title: 'All reject capitalism',
        explanation: 'Even individualists like Proudhon rejected capitalist wage labour and exploitation. "Property is theft" targeted capitalism not all ownership. Unity against capitalism.'
      },
      {
        title: 'Freedom from state economic control',
        explanation: 'All anarchists oppose state regulation of economy. Whether through markets or communes, economic life should be free from political coercion.'
      },
      {
        title: 'Workers\' control valued',
        explanation: 'Both strands value worker autonomy. Collectivist worker cooperatives and mutualist worker associations both give workers economic freedom from bosses.'
      },
      {
        title: 'Proudhon bridges divide',
        explanation: 'Proudhon combined individual possession with rejection of capitalist property. Mutualism shows collectivist and individualist elements can coexist.'
      }
    ],
    synoptic_links: [
      'Compare with liberal economic freedom',
      'Link to socialist view of economic freedom',
      'Connect to conservative organic economy'
    ],
    examples: [
      {
        title: 'Kropotkin\'s communist distribution',
        context: '"From each according to ability, to each according to need." Economic freedom means freedom from want through collective provision, not individual accumulation.'
      },
      {
        title: 'Proudhon\'s mutualism',
        context: 'Workers\' associations, mutual banks, individual possession without exploitation. Shows middle ground between pure collectivism and pure individualism.'
      }
    ],
    pitfalls: [
      'Define economic freedom carefully',
      'Use thinkers from both strands',
      'Consider Proudhon\'s intermediate position'
    ]
  },
  {
    id: 'ma122',
    question_id: 'q122',
    arguments_for: [
      {
        title: 'Optimists vs egoists',
        explanation: 'Kropotkin saw humans as naturally cooperative through mutual aid. Stirner saw humans as self-interested egos. Fundamentally different anthropologies.'
      },
      {
        title: 'Social vs individual nature',
        explanation: 'Collectivists see humans as inherently social; individualists see humans as distinct individuals first. Is society natural or constructed? Major disagreement.'
      },
      {
        title: 'Moral nature disputed',
        explanation: 'Goldman and Kropotkin believed in innate moral sense. Stirner rejected morality as "spook." Fundamental divide on whether humans are moral beings.'
      },
      {
        title: 'Implications differ radically',
        explanation: 'If humans naturally cooperative (Kropotkin), communism works. If naturally egoistic (Stirner), only individualism works. Human nature determines viable anarchism.'
      }
    ],
    arguments_against: [
      {
        title: 'All reject conservative pessimism',
        explanation: 'No anarchist accepts Hobbesian view requiring state to prevent chaos. All believe humans can live without coercive authority. Shared optimism relative to conservatives.'
      },
      {
        title: 'State corrupts, not human nature',
        explanation: 'Anarchists agree current bad behaviour results from state and capitalism, not inherent human nature. Remove oppression, improve behaviour. Shared environmental view.'
      },
      {
        title: 'Rationality assumed',
        explanation: 'Most anarchists assume humans can rationally perceive their interests and cooperate. Godwin\'s perfectibility through reason shared to degree across strands.'
      },
      {
        title: 'Stirner overstated',
        explanation: 'Stirner\'s egoism doesn\'t deny cooperation - "union of egoists" involves working together when interests coincide. Less different from Kropotkin than appears.'
      }
    ],
    synoptic_links: [
      'Compare with conservative view of flawed human nature',
      'Link to liberal view of rational self-interest',
      'Connect to socialist view of malleable human nature'
    ],
    examples: [
      {
        title: 'Mutual Aid vs The Ego and Its Own',
        context: 'Kropotkin used evolutionary biology to argue cooperation is natural. Stirner used philosophy to argue individual ego is all that exists. Opposite starting points.'
      },
      {
        title: 'Goldman on human nature',
        context: 'Goldman combined elements - believed in individual freedom but also in social instincts. Shows views not simply binary.'
      }
    ],
    pitfalls: [
      'Compare specific thinkers\' views',
      'Consider whether disagreement is fundamental or superficial',
      'Don\'t assume all collectivists identical or all individualists identical'
    ]
  },
  {
    id: 'ma123',
    question_id: 'q123',
    arguments_for: [
      {
        title: 'Positive vs negative liberty',
        explanation: 'Collectivists see liberty as freedom from exploitation, requiring economic equality. Individualists see liberty as absence of external constraint. Different liberty concepts.'
      },
      {
        title: 'Social vs individual freedom',
        explanation: 'Kropotkin\'s freedom realised in community; Stirner\'s freedom is individual self-assertion against all. Freedom through society vs freedom from society.'
      },
      {
        title: 'Property and liberty',
        explanation: 'Collectivists see private property as liberty-denying (creates wage slavery). Individualists see property as liberty-enhancing (expression of self). Opposite views.'
      },
      {
        title: 'Different constraints identified',
        explanation: 'Collectivists focus on economic constraints; individualists focus on political/social constraints. What threatens liberty differs, so liberty itself differs.'
      }
    ],
    arguments_against: [
      {
        title: 'All oppose state coercion',
        explanation: 'Both strands see state as primary threat to liberty. Freedom from political authority shared. Core agreement on political liberty.'
      },
      {
        title: 'Voluntary association for all',
        explanation: 'Both value freedom to associate voluntarily. Whether in communes or markets, relationships should be chosen not imposed. Freedom of association shared.'
      },
      {
        title: 'Autonomy valued',
        explanation: 'Individual autonomy - self-governance, making own decisions - valued by all anarchists. Differ on conditions for autonomy, not on its importance.'
      },
      {
        title: 'Both reject capitalism',
        explanation: 'Even individualists like Proudhon saw capitalist wage labour as unfree. Liberty requires freedom from exploitation. Agreement on capitalism as enemy of liberty.'
      }
    ],
    synoptic_links: [
      'Compare with liberal concepts of liberty',
      'Link to socialist positive liberty',
      'Connect to conservative ordered liberty'
    ],
    examples: [
      {
        title: 'Kropotkin on freedom',
        context: 'Freedom impossible under capitalism - must be freed from wage slavery through collective ownership. Liberty is social achievement.'
      },
      {
        title: 'Stirner on freedom',
        context: 'Freedom is ego\'s self-assertion. "The unmanent man is not free-born, but free-born." Liberty is individual achievement through rejecting all constraints.'
      }
    ],
    pitfalls: [
      'Define liberty carefully',
      'Use specific thinkers',
      'Consider whether different aspects of liberty can be reconciled'
    ]
  },
  {
    id: 'ma124',
    question_id: 'q124',
    arguments_for: [
      {
        title: 'All oppose capitalism',
        explanation: 'Bakunin, Kropotkin, Proudhon, Goldman all rejected capitalist exploitation. Even "property is theft" Proudhon opposed capitalism. Anti-capitalism unites anarchist economics.'
      },
      {
        title: 'Workers\' control valued',
        explanation: 'Collectivist cooperatives and mutualist associations both give workers control over their labour. Self-management, not wage labour, is shared economic principle.'
      },
      {
        title: 'Decentralised economics',
        explanation: 'All oppose centralised economic planning (state socialism). Whether communes or markets, anarchist economics is decentralised, local, federated.'
      },
      {
        title: 'Freedom from economic coercion',
        explanation: 'All anarchists want economic arrangements that don\'t force people to work for others on others\' terms. Freedom in economic life is common goal.'
      }
    ],
    arguments_against: [
      {
        title: 'Markets vs planning',
        explanation: 'Proudhon and anarcho-capitalists embrace markets; Kropotkin rejects them for communist distribution. Fundamental mechanism of economy disputed.'
      },
      {
        title: 'Property irreconcilable',
        explanation: 'Common ownership (Kropotkin) vs individual possession (Proudhon) vs private property (Stirner, anarcho-capitalists). Three incompatible property regimes.'
      },
      {
        title: 'Distribution principles differ',
        explanation: 'By need (Kropotkin), by contribution (Bakunin), by exchange (mutualists), by acquisition (anarcho-capitalists). How to distribute goods fundamentally disputed.'
      },
      {
        title: 'Anarcho-capitalism is capitalist',
        explanation: 'Anarcho-capitalists accept wage labour, profit, accumulation. Other anarchists reject these. One strand accepts what others fundamentally oppose.'
      }
    ],
    synoptic_links: [
      'Compare with Marxist economics',
      'Link to liberal market economics',
      'Connect to socialist planned economy'
    ],
    examples: [
      {
        title: 'Proudhon\'s mutualism',
        context: 'Mutual banks providing interest-free credit, workers\' associations, markets without capitalism. Shows complexity of anarchist economics.'
      },
      {
        title: 'Kropotkin vs Rothbard',
        context: 'Communist distribution "from each, to each" vs free market capitalism. Both "anarchist" but completely opposite economics.'
      }
    ],
    pitfalls: [
      'Consider different strands separately',
      'Use specific thinkers',
      'Address anarcho-capitalism\'s position'
    ]
  },
  // Political Ideas - Ecologism
  {
    id: 'ma125',
    question_id: 'q125',
    arguments_for: [
      {
        title: 'Shared ecological worldview',
        explanation: 'All ecologists see nature as interconnected system. Leopold\'s land ethic, Carson\'s ecosystem thinking, Bookchin\'s social ecology all emphasise holistic understanding.'
      },
      {
        title: 'Agreement on sustainability',
        explanation: 'All ecologists believe current economic model is unsustainable. Whether shallow or deep, all accept limits to growth and need to live within planetary boundaries.'
      },
      {
        title: 'Common enemies',
        explanation: 'All ecologists oppose unrestrained capitalism, consumerism, and short-term thinking. United in critique of dominant economic paradigm regardless of proposed alternative.'
      },
      {
        title: 'Nature has value',
        explanation: 'All ecologists reject purely instrumental view of nature. Whether anthropocentric (human benefit) or ecocentric (intrinsic value), nature deserves consideration and protection.'
      }
    ],
    arguments_against: [
      {
        title: 'Shallow vs deep ecology',
        explanation: 'Shallow ecology (Schumacher) works within existing system for sustainability. Deep ecology demands radical transformation. Fundamentally different views on necessary change.'
      },
      {
        title: 'Human-nature relationship',
        explanation: 'Anthropocentric ecologists see nature as valuable for humans. Ecocentric ecologists (Leopold) see humans as part of nature with no special status. Different ethics.'
      },
      {
        title: 'Economic alternatives',
        explanation: 'Bookchin\'s libertarian municipalism, Schumacher\'s small-scale capitalism, deep ecology\'s anti-growth - very different economic visions.'
      },
      {
        title: 'Role of technology',
        explanation: 'Some ecologists accept technology (Schumacher\'s "appropriate technology"). Others (deep ecologists) see technology as problem. Disagreement on solutions.'
      }
    ],
    synoptic_links: [
      'Compare with socialist view of capitalism',
      'Link to conservative organic society',
      'Connect to liberal individualism'
    ],
    examples: [
      {
        title: 'Leopold\'s land ethic',
        context: 'Expanded moral community to include land itself. Ecocentric view that nature has intrinsic value beyond human use.'
      },
      {
        title: 'Schumacher\'s Small Is Beautiful',
        context: 'Buddhist economics, appropriate technology, human-scale production. Works within capitalism but transforms it. Shallow ecology approach.'
      }
    ],
    pitfalls: [
      'Distinguish shallow and deep ecology clearly',
      'Use named thinkers',
      'Don\'t assume all ecologists are deep ecologists'
    ]
  },
  {
    id: 'ma126',
    question_id: 'q126',
    arguments_for: [
      {
        title: 'All reject growth paradigm',
        explanation: 'Shallow and deep ecologists agree infinite growth on finite planet is impossible. Sustainability, not growth, should be economic goal. Shared critique.'
      },
      {
        title: 'Local and small-scale valued',
        explanation: 'Schumacher\'s "small is beautiful", Bookchin\'s libertarian municipalism, deep ecology\'s bioregionalism all favour decentralised, local economies.'
      },
      {
        title: 'Common opposition to consumerism',
        explanation: 'All ecologists critique consumer capitalism. Whether reformed (shallow) or abolished (deep), current consumption patterns must change.'
      },
      {
        title: 'Sustainability as shared principle',
        explanation: 'Economy must operate within ecological limits. This principle unites different strands even if implementation differs.'
      }
    ],
    arguments_against: [
      {
        title: 'Reform vs transformation',
        explanation: 'Shallow ecologists accept market economy with green reforms. Deep ecologists reject capitalism entirely. Fundamental disagreement on economic system.'
      },
      {
        title: 'Growth question',
        explanation: 'Shallow ecology accepts "sustainable development" with some growth. Deep ecology rejects all growth. "Green growth" divides the movement.'
      },
      {
        title: 'Role of markets',
        explanation: 'Some ecologists accept carbon pricing, green markets. Bookchin rejected markets for municipal planning. Market mechanisms disputed.'
      },
      {
        title: 'Technology\'s role',
        explanation: 'Ecological modernisation accepts technological solutions. Deep ecology sceptical of techno-fixes. Different views on green technology.'
      }
    ],
    synoptic_links: [
      'Compare with socialist economic alternatives',
      'Link to liberal market economics',
      'Connect to conservative organic economy'
    ],
    examples: [
      {
        title: 'Bookchin\'s social ecology',
        context: 'Linked ecological crisis to social hierarchy. Proposed libertarian municipalism - direct democracy, municipal ownership. Radical economic transformation.'
      },
      {
        title: 'Sustainable development',
        context: 'Brundtland Report concept accepted by shallow ecologists. "Meet present needs without compromising future." Deep ecologists see as contradiction in terms.'
      }
    ],
    pitfalls: [
      'Define what kind of economy being compared',
      'Use specific thinkers',
      'Consider both production and consumption'
    ]
  },
  {
    id: 'ma127',
    question_id: 'q127',
    arguments_for: [
      {
        title: 'Ecological consciousness shared',
        explanation: 'All ecologists see nature as interconnected system requiring protection. Leopold, Carson, Bookchin, Schumacher all share this fundamental ecological worldview.'
      },
      {
        title: 'Critique of industrialism',
        explanation: 'All ecologists critique industrial society\'s relationship with nature. Whether shallow or deep, environmental damage from current system is recognised.'
      },
      {
        title: 'Future generations matter',
        explanation: 'Sustainability implies concern for future. All ecologists reject short-termism that ignores long-term environmental consequences.'
      },
      {
        title: 'United on key policies',
        explanation: 'Climate action, biodiversity protection, pollution reduction supported across ecologist spectrum. Practical agreement even with theoretical differences.'
      }
    ],
    arguments_against: [
      {
        title: 'Anthropocentric vs ecocentric',
        explanation: 'Shallow ecologists are human-centred; deep ecologists reject human superiority. Fundamental disagreement on nature\'s value and humans\' place.'
      },
      {
        title: 'Different solutions',
        explanation: 'Shallow ecology accepts reformed capitalism; deep ecology requires transformation. Green consumerism vs anti-consumerism. Means differ radically.'
      },
      {
        title: 'Political strategies differ',
        explanation: 'Shallow ecology works within existing politics. Social ecology (Bookchin) requires new political structures. Reformism vs radicalism.'
      },
      {
        title: 'Ecofeminism challenges both',
        explanation: 'Merchant\'s ecofeminism links environmental and gender oppression. Different analysis from both shallow and deep ecology. Multiple strands with different focuses.'
      }
    ],
    synoptic_links: [
      'Compare with socialist unity/diversity',
      'Link to liberal agreement on core principles',
      'Connect to conservative unity debates'
    ],
    examples: [
      {
        title: 'Carson\'s Silent Spring',
        context: 'Launched modern environmental movement. Human health focus (anthropocentric) but sparked both shallow and deep ecology. Foundational but interpreted differently.'
      },
      {
        title: 'Merchant\'s ecofeminism',
        context: 'The Death of Nature linked domination of nature to domination of women. Added gender dimension to ecological analysis. Shows diversity within ecologism.'
      }
    ],
    pitfalls: [
      'Compare different strands systematically',
      'Use named thinkers',
      'Consider both theoretical and practical agreement/disagreement'
    ]
  },
  {
    id: 'ma128',
    question_id: 'q128',
    arguments_for: [
      {
        title: 'Sustainability shared',
        explanation: 'All ecologists agree economy must operate within environmental limits. Whether through reform or transformation, sustainability is common goal.'
      },
      {
        title: 'Critique of growth',
        explanation: 'Schumacher, Bookchin, deep ecologists all question growth imperative. Limits to Growth thinking shared across strands.'
      },
      {
        title: 'Local economics favoured',
        explanation: 'Schumacher\'s human-scale economics, Bookchin\'s municipal economics, bioregional economics - all favour localisation over globalisation.'
      },
      {
        title: 'Work differently understood',
        explanation: 'Ecologists generally value meaningful work over alienated labour. Production for use not profit. Different from capitalist efficiency.'
      }
    ],
    arguments_against: [
      {
        title: 'Markets accepted or rejected',
        explanation: 'Shallow ecology accepts market mechanisms (carbon trading, green capitalism). Bookchin rejected markets entirely. Fundamental disagreement.'
      },
      {
        title: 'Property arrangements differ',
        explanation: 'Some ecologists accept private property with regulation. Social ecology prefers commons and municipal ownership. Different property systems.'
      },
      {
        title: 'Technology views diverge',
        explanation: 'Schumacher\'s "appropriate technology" accepts some technology. Deep ecologists more sceptical. Ecological modernisation embraces green tech. Different roles for technology.'
      },
      {
        title: 'Growth question unsettled',
        explanation: '"Sustainable growth" accepted by some, rejected by others. Green growth vs degrowth is major division within ecologism.'
      }
    ],
    synoptic_links: [
      'Compare with socialist economic debates',
      'Link to liberal market vs intervention',
      'Connect to conservative organic economy'
    ],
    examples: [
      {
        title: 'Schumacher\'s Small Is Beautiful',
        context: 'Buddhist economics - work should be meaningful, technology appropriate to human scale. Accepts markets but transforms economic goals.'
      },
      {
        title: 'Bookchin\'s libertarian municipalism',
        context: 'Democratic control of economy at municipal level. Confederated communes, ecological production. Rejects both capitalism and state socialism.'
      }
    ],
    pitfalls: [
      'Specify which aspects of economy being compared',
      'Use named thinkers',
      'Consider production, consumption, and distribution'
    ]
  },
  {
    id: 'ma129',
    question_id: 'q129',
    arguments_for: [
      {
        title: 'Interconnection recognised',
        explanation: 'All ecologists see nature as interconnected system, not collection of separate resources. Leopold\'s ecosystem thinking, Carson\'s food chains, Bookchin\'s nature-society links.'
      },
      {
        title: 'Nature deserves consideration',
        explanation: 'Whether for human benefit or intrinsic value, all ecologists agree nature cannot be treated purely instrumentally. Environmental ethics shared.'
      },
      {
        title: 'Humans depend on nature',
        explanation: 'All ecologists recognise human dependency on healthy ecosystems. Sustainability requires respecting ecological limits. Shared understanding.'
      },
      {
        title: 'Critique of domination',
        explanation: 'All ecologists criticise human attempts to dominate and control nature. Whether from anthropocentric or ecocentric view, exploitation is wrong.'
      }
    ],
    arguments_against: [
      {
        title: 'Anthropocentric vs ecocentric',
        explanation: 'Shallow ecologists see nature\'s value in relation to humans. Deep ecologists see nature as valuable in itself. Fundamentally different ethics.'
      },
      {
        title: 'Human place in nature',
        explanation: 'Leopold placed humans within biotic community as citizens. Others maintain human distinctiveness. Are we part of nature or apart from it?'
      },
      {
        title: 'Moral consideration extent',
        explanation: 'How far does moral consideration extend? Animals? Plants? Ecosystems? Land itself? Different boundaries of moral community.'
      },
      {
        title: 'Ecofeminism\'s different view',
        explanation: 'Merchant links domination of nature to domination of women. Gendered analysis of human-nature relationship differs from other ecological perspectives.'
      }
    ],
    synoptic_links: [
      'Compare with religious views of human dominion',
      'Link to conservative stewardship',
      'Connect to liberal individualism and rights'
    ],
    examples: [
      {
        title: 'Leopold\'s land ethic',
        context: '"A thing is right when it tends to preserve the integrity, stability, and beauty of the biotic community." Humans as citizens of, not conquerors of, land.'
      },
      {
        title: 'Carson\'s Silent Spring',
        context: 'Exposed interconnections through pesticide effects on food chains. Showed human health depends on ecosystem health. Anthropocentric but ecological.'
      }
    ],
    pitfalls: [
      'Define anthropocentrism and ecocentrism',
      'Use specific thinkers',
      'Consider practical implications of different views'
    ]
  },
  {
    id: 'ma130',
    question_id: 'q130',
    arguments_for: [
      {
        title: 'All want environmental protection',
        explanation: 'State regulation of pollution, protection of biodiversity, climate action - all ecologists accept some state role in environmental protection.'
      },
      {
        title: 'Collective action needed',
        explanation: 'Environmental problems require collective response. State can coordinate action, enforce standards, invest in green infrastructure. Shared recognition.'
      },
      {
        title: 'Market failure justifies intervention',
        explanation: 'Even shallow ecologists accepting markets recognise environmental market failures (externalities). State correction of market failures accepted.'
      },
      {
        title: 'International cooperation',
        explanation: 'Global environmental problems require state-level international agreements. Paris Agreement shows states as necessary actors in environmental governance.'
      }
    ],
    arguments_against: [
      {
        title: 'State as problem',
        explanation: 'Bookchin\'s social ecology sees state as part of hierarchical system causing environmental crisis. State power enables destruction. Different analysis.'
      },
      {
        title: 'Centralisation vs localisation',
        explanation: 'Bookchin favoured confederated municipalities over centralised state. Schumacher\'s localism questions state scale. Decentralists sceptical of state.'
      },
      {
        title: 'State serves capitalism',
        explanation: 'Some ecologists see state as captured by industrial interests. Regulatory failure, corporate influence mean state won\'t solve problems it helped create.'
      },
      {
        title: 'Shallow vs deep',
        explanation: 'Shallow ecology accepts state as reform vehicle. Deep ecology may see state as part of anthropocentric, hierarchical problem. Different state roles imagined.'
      }
    ],
    synoptic_links: [
      'Compare with socialist view of state',
      'Link to liberal minimal vs enabling state',
      'Connect to conservative organic state'
    ],
    examples: [
      {
        title: 'Bookchin\'s libertarian municipalism',
        context: 'Proposed direct democracy at municipal level, confederated communes replacing centralised state. Ecological society requires new political forms.'
      },
      {
        title: 'Environmental regulation',
        context: 'Clean Air Acts, endangered species protection, climate targets - all require state action. Shows state role in existing environmental protection.'
      }
    ],
    pitfalls: [
      'Distinguish different ecologist views on state',
      'Consider both national and local levels',
      'Use specific thinkers'
    ]
  },
  // Political Ideas - Feminism
  {
    id: 'ma131',
    question_id: 'q131',
    arguments_for: [
      {
        title: 'Rejection of biological determinism',
        explanation: 'All feminists reject idea that biology determines women\'s role. De Beauvoir\'s "one is not born but becomes a woman" accepted across strands. Gender is constructed.'
      },
      {
        title: 'Women\'s equality potential',
        explanation: 'All feminists believe women have same capacities as men when freed from oppression. Wollstonecraft\'s rational women, Millett\'s equal humans.'
      },
      {
        title: 'Patriarchy distorts',
        explanation: 'Current differences between men and women result from patriarchal socialisation not nature. Remove oppression and human nature freed.'
      },
      {
        title: 'Reason and agency',
        explanation: 'Feminists agree women are rational agents capable of determining their own lives. This challenges views of women as naturally dependent or irrational.'
      }
    ],
    arguments_against: [
      {
        title: 'Difference vs equality feminism',
        explanation: 'Radical feminists may emphasise inherent differences between men and women. Some celebrate feminine qualities rather than seeking to be like men. Division within feminism.'
      },
      {
        title: 'Sex vs gender debate',
        explanation: 'While gender is constructed, some feminists see sex-based differences as real and relevant. Debates about what if anything is natural continue.'
      },
      {
        title: 'Essentialism tensions',
        explanation: 'Speaking of "women" as group may assume essential shared nature. Intersectional feminism (hooks) questions this. Different women, different natures?'
      },
      {
        title: 'Socialist feminist view',
        explanation: 'Rowbotham links human nature to economic conditions. Capitalism distorts both men and women. More than just patriarchy shapes human nature.'
      }
    ],
    synoptic_links: [
      'Compare with conservative view of natural gender roles',
      'Link to liberal rational individual',
      'Connect to socialist malleable human nature'
    ],
    examples: [
      {
        title: 'de Beauvoir\'s The Second Sex',
        context: '"One is not born, but rather becomes, a woman." Gender as social construction. Human nature is made not given.'
      },
      {
        title: 'Wollstonecraft\'s Vindication',
        context: 'Women are rational beings like men. Current inferiority results from lack of education, not natural incapacity. Enlightenment feminism.'
      }
    ],
    pitfalls: [
      'Use named thinkers from specification',
      'Distinguish different strands\' views',
      'Consider what "human nature" means to feminists'
    ]
  },
  {
    id: 'ma132',
    question_id: 'q132',
    arguments_for: [
      {
        title: 'Equality vs difference feminism',
        explanation: 'Liberal feminists seek equal treatment; difference feminists celebrate feminine qualities. Equality of sameness vs equality of difference. Fundamental dispute.'
      },
      {
        title: 'Equality of opportunity vs outcome',
        explanation: 'Liberal feminists accept equality of opportunity. Socialist feminists demand equality of outcome. Same starting point vs same ending point.'
      },
      {
        title: 'Formal vs substantive equality',
        explanation: 'Legal equality (liberal) vs real equality in power and resources (socialist/radical). Different understandings of what equality requires.'
      },
      {
        title: 'Individual vs structural',
        explanation: 'Liberal feminists focus on individual access. Socialist feminists demand structural change. Different levels at which equality must be achieved.'
      }
    ],
    arguments_against: [
      {
        title: 'All oppose patriarchy',
        explanation: 'All feminists agree women are oppressed and deserve equal status. United in rejecting patriarchal subordination of women. Core agreement.'
      },
      {
        title: 'All want women\'s advancement',
        explanation: 'Whether through legal reform, economic change, or cultural revolution, all feminists seek to improve women\'s position. Common goal.'
      },
      {
        title: 'Difference about means not ends',
        explanation: 'Disagreements about how to achieve equality, not whether equality is valuable. Shared commitment to female equality.'
      },
      {
        title: 'Practical solidarity',
        explanation: 'Despite theoretical differences, feminists unite on practical issues - reproductive rights, violence against women, equal pay. Common struggles.'
      }
    ],
    synoptic_links: [
      'Compare with liberal vs socialist equality debates',
      'Link to conservative hierarchy acceptance',
      'Connect to anarchist views on equality'
    ],
    examples: [
      {
        title: 'Friedan\'s liberal feminism',
        context: 'Sought equal rights and opportunities within existing system. Legal equality, access to careers. Equality as equal treatment.'
      },
      {
        title: 'Rowbotham\'s socialist feminism',
        context: 'Women\'s oppression linked to capitalism. Real equality requires economic transformation, not just legal rights. Structural equality.'
      }
    ],
    pitfalls: [
      'Define different types of equality',
      'Use specification thinkers',
      'Consider both agreement and disagreement'
    ]
  },
  {
    id: 'ma133',
    question_id: 'q133',
    arguments_for: [
      {
        title: 'All seek social change',
        explanation: 'All feminists want to change society to improve women\'s position. United in believing change is both necessary and possible. Shared transformative goal.'
      },
      {
        title: 'Education important',
        explanation: 'Wollstonecraft, de Beauvoir, Friedan all emphasise consciousness-raising and education. Women must understand their oppression. Shared method.'
      },
      {
        title: 'Challenge to socialisation',
        explanation: 'All feminists challenge how women are socialised. Whether through individual consciousness or collective action, changing socialisation shared aim.'
      },
      {
        title: 'Women\'s agency central',
        explanation: 'All feminists believe women must be agents of their own liberation. Not passive recipients of male benevolence. Women change society.'
      }
    ],
    arguments_against: [
      {
        title: 'Reform vs revolution',
        explanation: 'Liberal feminists work within existing system. Radical feminists seek revolutionary transformation. Different assessments of how much change needed.'
      },
      {
        title: 'State as tool or problem',
        explanation: 'Liberal feminists use state for reform. Radical feminists see state as patriarchal. Socialist feminists link state to capitalism. Different strategies.'
      },
      {
        title: 'Personal vs political emphasis',
        explanation: 'Radical feminists: "personal is political" - transform everyday life. Liberal feminists focus on public sphere. Different sites of change.'
      },
      {
        title: 'Individual vs collective action',
        explanation: 'Liberal feminists emphasise individual women advancing. Socialist feminists emphasise collective action and solidarity. Different agents of change.'
      }
    ],
    synoptic_links: [
      'Compare with socialist reform vs revolution debate',
      'Link to liberal gradual reform',
      'Connect to anarchist direct action'
    ],
    examples: [
      {
        title: 'Friedan and NOW',
        context: 'Founded National Organization for Women to lobby for legal reform. Working within existing political system for change.'
      },
      {
        title: 'Millett\'s Sexual Politics',
        context: 'Personal relationships are political power relations. Transformation requires changing intimate sphere, not just laws.'
      }
    ],
    pitfalls: [
      'Distinguish different feminist strategies',
      'Use specification thinkers',
      'Consider both means and ends'
    ]
  },
  {
    id: 'ma134',
    question_id: 'q134',
    arguments_for: [
      {
        title: 'Radical feminist position',
        explanation: 'Millett argued patriarchy is universal and persistent. Some suggest male domination may have biological roots in aggression or reproduction. Patriarchy as natural.'
      },
      {
        title: 'Persistence explained',
        explanation: 'If patriarchy were purely social, why so universal and persistent? Some feminists conclude there may be natural tendencies toward male domination.'
      },
      {
        title: 'Reproductive differences',
        explanation: 'Women\'s childbearing role may create basis for patriarchy. Some feminists see this as natural starting point even if social elaboration excessive.'
      },
      {
        title: 'Difference feminism',
        explanation: 'Some feminists accept natural differences between sexes. Men may be naturally more aggressive; women naturally more nurturing. Patriarchy builds on natural differences.'
      }
    ],
    arguments_against: [
      {
        title: 'Social construction dominant view',
        explanation: 'Most feminists reject biological determinism. De Beauvoir\'s "one is not born a woman" - patriarchy is social creation, not natural order. Mainstream position.'
      },
      {
        title: 'Historical and cultural variation',
        explanation: 'Patriarchy takes different forms in different societies. If natural, would be more uniform. Variation suggests social not natural origins.'
      },
      {
        title: 'Socialist feminist view',
        explanation: 'Rowbotham linked patriarchy to capitalism. Specific economic systems, not human nature, create gender oppression. Historically contingent.'
      },
      {
        title: 'Interests not nature',
        explanation: 'Patriarchy serves male interests. Doesn\'t require explanation in terms of nature. Power maintains itself through institutions and ideology.'
      }
    ],
    synoptic_links: [
      'Compare with conservative natural gender roles',
      'Link to socialist view of human nature shaped by conditions',
      'Connect to liberal rational individual'
    ],
    examples: [
      {
        title: 'de Beauvoir\'s existentialism',
        context: 'Humans have no fixed nature - we make ourselves. Patriarchy is choice not destiny. Existential feminist position.'
      },
      {
        title: 'Rowbotham\'s socialist feminism',
        context: 'Patriarchy and capitalism reinforce each other. Change economic system, change gender relations. Not about human nature.'
      }
    ],
    pitfalls: [
      'Clarify what "based on human nature" means',
      'Use specification thinkers',
      'Don\'t assume all feminists agree'
    ]
  },
  {
    id: 'ma135',
    question_id: 'q135',
    arguments_for: [
      {
        title: 'Liberal feminist strategy',
        explanation: 'Friedan and liberal feminists use state for legal reform - equal pay, anti-discrimination law, reproductive rights. State is tool for progress.'
      },
      {
        title: 'Legal equality requires state',
        explanation: 'Rights need legal enforcement. State passes and enforces equality legislation. Without state, no formal equality.'
      },
      {
        title: 'Welfare state benefits women',
        explanation: 'State provision of childcare, healthcare, education reduces women\'s dependency. Social democratic state supports women\'s independence.'
      },
      {
        title: 'Practical achievements',
        explanation: 'Votes, property rights, workplace equality, reproductive rights - all achieved through state action. Historical evidence for state\'s role.'
      }
    ],
    arguments_against: [
      {
        title: 'Radical feminist critique',
        explanation: 'Millett saw state as patriarchal institution. Male-dominated state won\'t genuinely liberate women. State is part of problem.'
      },
      {
        title: 'Personal is political',
        explanation: 'State can\'t reach into private sphere where much oppression occurs. Family, sexuality, relationships need transformation beyond state\'s reach.'
      },
      {
        title: 'Socialist feminist ambivalence',
        explanation: 'Rowbotham saw state as serving capitalism which reinforces patriarchy. State reform insufficient without economic transformation.'
      },
      {
        title: 'Legal equality insufficient',
        explanation: 'Formal equality doesn\'t end real inequality. State can remove legal barriers but can\'t transform culture, attitudes, power relations.'
      }
    ],
    synoptic_links: [
      'Compare with liberal vs socialist views of state',
      'Link to anarchist anti-statism',
      'Connect to conservative organic state'
    ],
    examples: [
      {
        title: 'NOW lobbying',
        context: 'National Organization for Women lobbies state for legal reform. Equal Rights Amendment campaign. Liberal feminist state strategy.'
      },
      {
        title: 'Radical feminist consciousness-raising',
        context: 'Women\'s groups raised awareness of personal oppression. Change happens in community not through state. Alternative strategy.'
      }
    ],
    pitfalls: [
      'Compare different feminist views of state',
      'Use specification thinkers',
      'Consider both potential and limits of state'
    ]
  },
  {
    id: 'ma136',
    question_id: 'q136',
    arguments_for: [
      {
        title: 'All critique capitalism',
        explanation: 'Socialist feminists (Rowbotham) see capitalism as reinforcing patriarchy. Radical feminists note capitalism commodifies women. Liberal feminists critique workplace discrimination. Shared critique.'
      },
      {
        title: 'Economic independence valued',
        explanation: 'All feminists see women\'s economic independence as essential. Gilman emphasised women\'s economic freedom. Wollstonecraft wanted women to earn. Shared goal.'
      },
      {
        title: 'Opposition to economic exploitation',
        explanation: 'All feminists oppose exploitation of women\'s labour - paid and unpaid. Domestic labour, wage discrimination, sexual exploitation all criticised.'
      },
      {
        title: 'Work must change',
        explanation: 'Whether through equal access (liberal), transformed workplace (socialist), or revaluing care work (radical), all feminists want economic change.'
      }
    ],
    arguments_against: [
      {
        title: 'Market vs transformation',
        explanation: 'Liberal feminists accept market economy with equal access. Socialist feminists want economic transformation. Different economic systems envisioned.'
      },
      {
        title: 'Private property disputed',
        explanation: 'Liberal feminists defend women\'s property rights. Socialist feminists may question private property itself. Different property regimes.'
      },
      {
        title: 'Wages for housework debate',
        explanation: 'Some feminists demanded payment for domestic labour. Others saw this as reinforcing women\'s domestic role. Disagreement about care economy.'
      },
      {
        title: 'Role of class',
        explanation: 'Socialist feminists (Rowbotham) emphasise class as well as gender. Liberal feminists focus on gender alone. Different economic analyses.'
      }
    ],
    synoptic_links: [
      'Compare with socialist economic alternatives',
      'Link to liberal free market',
      'Connect to conservative family economics'
    ],
    examples: [
      {
        title: 'Gilman\'s Women and Economics',
        context: 'Economic independence as key to women\'s freedom. Proposed collective kitchens, childcare. Practical economic transformation.'
      },
      {
        title: 'Rowbotham\'s socialist feminism',
        context: 'Women\'s oppression rooted in capitalism. Need economic transformation, not just equal access to existing system.'
      }
    ],
    pitfalls: [
      'Compare different feminist economic visions',
      'Use specification thinkers',
      'Consider both production and reproduction'
    ]
  },
  {
    id: 'ma137',
    question_id: 'q137',
    arguments_for: [
      {
        title: 'Women\'s economic independence shared goal',
        explanation: 'Wollstonecraft, Gilman, Friedan, Rowbotham all want women economically independent. Core feminist economic goal across strands.'
      },
      {
        title: 'Critique of women\'s economic exploitation',
        explanation: 'All feminists recognise women\'s exploitation in economy - wage gaps, unpaid labour, occupational segregation. Shared critique.'
      },
      {
        title: 'Domestic labour valued',
        explanation: 'All feminists argue women\'s domestic work should be recognised and valued. Whether paid or socialised, invisibility of housework criticised.'
      },
      {
        title: 'Workplace equality sought',
        explanation: 'Equal pay, equal opportunity, end to discrimination - shared demands across feminist strands.'
      }
    ],
    arguments_against: [
      {
        title: 'Capitalism accepted or rejected',
        explanation: 'Liberal feminists accept capitalism with reforms. Socialist feminists (Rowbotham) see capitalism as problem. Fundamental economic disagreement.'
      },
      {
        title: 'Individual vs collective solutions',
        explanation: 'Liberal feminists emphasise individual advancement. Socialist feminists demand collective transformation. Different economic strategies.'
      },
      {
        title: 'Market mechanisms disputed',
        explanation: 'Some accept market-based solutions (corporate quotas). Others reject market approach entirely. Role of market contested.'
      },
      {
        title: 'Class analysis divides',
        explanation: 'Socialist feminists emphasise working-class women. Liberal feminists may focus on professional women. Whose economic interests prioritised?'
      }
    ],
    synoptic_links: [
      'Compare with socialist vs liberal economic debate',
      'Link to conservative traditional family economics',
      'Connect to ecologist sustainability economics'
    ],
    examples: [
      {
        title: 'Friedan\'s Feminine Mystique',
        context: 'Women trapped in domestic sphere need careers and economic participation. Liberal feminist emphasis on entering workforce.'
      },
      {
        title: 'Rowbotham\'s analysis',
        context: 'Capitalism and patriarchy reinforce each other. Women\'s economic oppression requires more than access to jobs.'
      }
    ],
    pitfalls: [
      'Define what economic agreement/disagreement means',
      'Use specification thinkers',
      'Consider both shared concerns and different solutions'
    ]
  },
  {
    id: 'ma138',
    question_id: 'q138',
    arguments_for: [
      {
        title: 'Central feminist insight',
        explanation: 'Millett\'s Sexual Politics established personal life as political. Family, sexuality, relationships are power structures. Widely accepted across feminism.'
      },
      {
        title: 'Liberal feminists accept',
        explanation: 'Even liberal feminists like Friedan showed domestic sphere as political. Feminine mystique was political ideology. Personal life shapes politics.'
      },
      {
        title: 'Socialist feminists agree',
        explanation: 'Rowbotham saw domestic labour as economically and politically significant. Private sphere is site of women\'s exploitation. Personal has political implications.'
      },
      {
        title: 'All analyse family',
        explanation: 'Every feminist strand analyses family as institution. Marriage, motherhood, sexuality all examined as political arrangements. Shared concern with personal life.'
      }
    ],
    arguments_against: [
      {
        title: 'Different emphasis',
        explanation: 'Liberal feminists focus more on public sphere access. Radical feminists focus more on personal transformation. Priority differs even if principle accepted.'
      },
      {
        title: 'Implications differ',
        explanation: 'For radical feminists, personal life must be revolutionised. For liberal feminists, changing public sphere will transform personal. Different strategic conclusions.'
      },
      {
        title: 'Intersectional complications',
        explanation: 'hooks showed "personal is political" applies differently across race and class. Whose personal life? Whose politics? Different experiences.'
      },
      {
        title: 'Degree of politicisation',
        explanation: 'Some feminists resist reducing everything to politics. Space for personal autonomy, individual choices. How political should personal become?'
      }
    ],
    synoptic_links: [
      'Compare with conservative private sphere protection',
      'Link to liberal public/private distinction',
      'Connect to socialist politicisation of economy'
    ],
    examples: [
      {
        title: 'Millett\'s Sexual Politics',
        context: 'Sexual relationships are power relationships. Patriarchy operates through intimate control. Foundational radical feminist text.'
      },
      {
        title: 'Friedan\'s Feminine Mystique',
        context: 'Showed how domestic ideology trapped women. Personal unhappiness was political problem. Liberal feminist use of personal is political.'
      }
    ],
    pitfalls: [
      'Show how different strands interpret the slogan',
      'Use specification thinkers',
      'Consider both agreement on principle and disagreement on implications'
    ]
  },
  {
    id: 'ma139',
    question_id: 'q139',
    arguments_for: [
      {
        title: 'All want transformation',
        explanation: 'All feminists seek to change society to end women\'s oppression. Whether reform or revolution, change is shared goal. United in transformative purpose.'
      },
      {
        title: 'Consciousness important',
        explanation: 'Wollstonecraft, de Beauvoir, Friedan all emphasised changing consciousness. Women must understand their oppression. Education and awareness shared strategy.'
      },
      {
        title: 'Challenging socialisation',
        explanation: 'All feminists target how women are socialised. Whether through education, consciousness-raising, or revolution, changing how women think about themselves shared method.'
      },
      {
        title: 'Women as agents',
        explanation: 'All feminists believe women must lead their own liberation. Not waiting for male benevolence. Women changing society shared premise.'
      }
    ],
    arguments_against: [
      {
        title: 'Reform vs revolution',
        explanation: 'Liberal feminists work within existing system. Radical feminists demand revolutionary transformation. Different assessments of how much change needed.'
      },
      {
        title: 'State strategy differs',
        explanation: 'Liberal feminists use state for legal reform. Radical feminists may reject state as patriarchal. Different institutional strategies.'
      },
      {
        title: 'Separatism vs integration',
        explanation: 'Some radical feminists favoured women-only spaces. Liberal feminists seek integration with men. Different social strategies.'
      },
      {
        title: 'Economic vs cultural change',
        explanation: 'Socialist feminists emphasise economic transformation. Radical feminists emphasise cultural and personal change. Different sites of change prioritised.'
      }
    ],
    synoptic_links: [
      'Compare with socialist reform vs revolution',
      'Link to liberal gradual change',
      'Connect to anarchist direct action'
    ],
    examples: [
      {
        title: 'NOW\'s lobbying',
        context: 'Legal reform through existing political system. Working within society for incremental change. Liberal strategy.'
      },
      {
        title: 'Radical feminist consciousness-raising',
        context: 'Small groups sharing experiences to develop political awareness. Transformation through changed consciousness. Radical strategy.'
      }
    ],
    pitfalls: [
      'Compare specific strategies from different strands',
      'Use specification thinkers',
      'Consider both means and ends of change'
    ]
  },
  {
    id: 'ma140',
    question_id: 'q140',
    arguments_for: [
      {
        title: 'Core feminist value',
        explanation: 'All feminists believe women should be equal to men. Wollstonecraft, de Beauvoir, Friedan, Millett, Rowbotham all share this. Defining feminist commitment.'
      },
      {
        title: 'Opposition to patriarchy shared',
        explanation: 'All feminists oppose patriarchal subordination. Whatever form equality takes, rejecting women\'s inferiority is common ground.'
      },
      {
        title: 'Historical progress valued',
        explanation: 'All feminists celebrate equality gains - suffrage, legal equality, workplace access. Progress toward equality shared measure of success.'
      },
      {
        title: 'Human dignity central',
        explanation: 'All feminists affirm women\'s equal dignity and worth. Foundation of all feminist thought regardless of strand.'
      }
    ],
    arguments_against: [
      {
        title: 'Equality vs difference',
        explanation: 'Liberal feminists seek equality as sameness of treatment. Difference feminists want equality that respects difference. Different equality concepts.'
      },
      {
        title: 'Opportunity vs outcome',
        explanation: 'Liberal feminists accept equality of opportunity. Socialist feminists demand equality of outcome. Where equality should be measured differs.'
      },
      {
        title: 'Formal vs substantive',
        explanation: 'Legal equality (liberal) vs real equality in power and resources (socialist/radical). Surface equality vs deep equality.'
      },
      {
        title: 'Individual vs structural',
        explanation: 'Liberal focus on individual equality. Socialist/radical focus on structural equality. Level at which equality achieved differs.'
      }
    ],
    synoptic_links: [
      'Compare with liberal vs socialist equality',
      'Link to conservative natural inequality',
      'Connect to anarchist egalitarianism'
    ],
    examples: [
      {
        title: 'Wollstonecraft\'s Vindication',
        context: 'Argued women are rational beings deserving equal education and respect. Foundational equality feminist.'
      },
      {
        title: 'Rowbotham\'s socialist feminism',
        context: 'Real equality requires economic transformation. Formal equality insufficient without addressing material conditions.'
      }
    ],
    pitfalls: [
      'Define different types of equality clearly',
      'Use specification thinkers',
      'Balance agreement on value with disagreement on meaning'
    ]
  },
  {
    id: 'ma141',
    question_id: 'q141',
    arguments_for: [
      {
        title: 'Patriarchy central',
        explanation: 'All feminists identify patriarchy as cause of women\'s oppression. Male domination, whether ancient or recent, universal. Shared enemy.'
      },
      {
        title: 'Socialisation analysis',
        explanation: 'All feminists see socialisation as mechanism of oppression. Women taught to accept inferiority. De Beauvoir\'s "one becomes a woman" widely accepted.'
      },
      {
        title: 'Gender construction',
        explanation: 'Feminists agree gender roles are socially constructed not natural. Construction serves male interests. Shared understanding.'
      },
      {
        title: 'Personal as political',
        explanation: 'All feminists see family, sexuality, personal relationships as sites of oppression. Private sphere is political. Shared analysis.'
      }
    ],
    arguments_against: [
      {
        title: 'Capitalism vs patriarchy',
        explanation: 'Socialist feminists (Rowbotham) see capitalism as crucial. Radical feminists prioritise patriarchy. Different emphasis on economic vs gender oppression.'
      },
      {
        title: 'Universal vs specific',
        explanation: 'Some feminists see patriarchy as universal system. Intersectionalists (hooks) see different oppressions for different women. One cause or many?'
      },
      {
        title: 'Male nature debated',
        explanation: 'Is male domination rooted in biology or purely social? Feminists disagree about whether men are naturally oppressive or socialised to be.'
      },
      {
        title: 'State\'s role',
        explanation: 'Liberal feminists see state as potentially liberating. Radical feminists see state as patriarchal. Different analyses of institutional oppression.'
      }
    ],
    synoptic_links: [
      'Compare with Marxist class analysis',
      'Link to liberal focus on individual discrimination',
      'Connect to intersectionality'
    ],
    examples: [
      {
        title: 'Millett\'s Sexual Politics',
        context: 'Patriarchy as political system operating through personal relationships. Culture, family, sexuality all maintain male power.'
      },
      {
        title: 'hooks\' intersectionality',
        context: 'Race, class, and gender intersect. Black women\'s oppression differs from white women\'s. Multiple, intersecting causes of oppression.'
      }
    ],
    pitfalls: [
      'Compare different feminist analyses',
      'Use specification thinkers',
      'Consider whether disagreement is fundamental or about emphasis'
    ]
  },
  // Political Ideas - Multiculturalism
  {
    id: 'ma142',
    question_id: 'q142',
    arguments_for: [
      {
        title: 'Group identities reinforced',
        explanation: 'Recognising distinct cultural groups may strengthen boundaries between them. Defining people by ethnicity or religion emphasises difference over commonality.'
      },
      {
        title: 'Parallel communities',
        explanation: 'Minority rights can enable separate institutions - schools, courts, associations. Communities may live parallel lives without integration.'
      },
      {
        title: 'Majority resentment',
        explanation: 'Special treatment for minorities may generate backlash. Perception of unfairness divides society. Unity undermined by differential treatment.'
      },
      {
        title: 'Essentialising cultures',
        explanation: 'Group rights assume stable, bounded cultures. May freeze cultural identities and prevent individual choice. Internal diversity ignored.'
      }
    ],
    arguments_against: [
      {
        title: 'Recognition enables participation',
        explanation: 'Taylor and Kymlicka argue recognition of identity enables full citizenship. Without recognition, minorities excluded from common life. Inclusion not division.'
      },
      {
        title: 'Intercultural dialogue',
        explanation: 'Parekh emphasises dialogue between cultures. Multiculturalism isn\'t separation but conversation. Understanding diversity strengthens society.'
      },
      {
        title: 'Justice requires accommodation',
        explanation: 'Kymlicka argues liberal justice requires accommodating cultural differences. Treating everyone identically disadvantages minorities. Fairness, not division.'
      },
      {
        title: 'Alternative worse',
        explanation: 'Forced assimilation creates resentment and resistance. Multiculturalism offers path to integration that respects identity. Better than alternatives.'
      }
    ],
    synoptic_links: [
      'Compare with liberal individualism',
      'Link to conservative national unity',
      'Connect to socialist class solidarity'
    ],
    examples: [
      {
        title: 'Kymlicka\'s Multicultural Citizenship',
        context: 'Group-differentiated rights protect minority cultures without undermining common citizenship. Minority rights and social unity compatible.'
      },
      {
        title: 'UK multiculturalism debates',
        context: 'Cameron\'s Munich speech (2011) criticised "state multiculturalism" for encouraging separation. Shows contested nature of multiculturalism\'s effects.'
      }
    ],
    pitfalls: [
      'Use named thinkers',
      'Consider both theoretical arguments and practical examples',
      'Don\'t assume multiculturalism means one thing'
    ]
  },
  {
    id: 'ma143',
    question_id: 'q143',
    arguments_for: [
      {
        title: 'Diversity valued',
        explanation: 'All multiculturalists believe cultural diversity enriches society. Berlin\'s value pluralism, Taylor\'s recognition, Parekh\'s dialogue all value diversity. Core agreement.'
      },
      {
        title: 'Respect for cultures',
        explanation: 'All multiculturalists argue cultures deserve respect and recognition. Minority cultures shouldn\'t be forced to assimilate. Shared principle.'
      },
      {
        title: 'Identity matters',
        explanation: 'Taylor argued cultural recognition essential for identity and self-respect. All multiculturalists see culture as important for individuals. Shared understanding.'
      },
      {
        title: 'Integration not assimilation',
        explanation: 'All multiculturalists reject forced assimilation. Integration that respects difference preferred over erasure of minority cultures.'
      }
    ],
    arguments_against: [
      {
        title: 'Liberal vs pluralist approaches',
        explanation: 'Kymlicka works within liberal framework with individual choice central. Parekh\'s pluralism gives cultures more independent value. Different foundations.'
      },
      {
        title: 'Group vs individual rights',
        explanation: 'Some multiculturalists emphasise group rights. Others worry this threatens individual freedom within groups. Balance disputed.'
      },
      {
        title: 'How much difference?',
        explanation: 'How much cultural difference should be accommodated? Different multiculturalists draw line differently. Illiberal practices particularly contested.'
      },
      {
        title: 'Integration vs separation',
        explanation: 'Modood emphasises political integration. Others accept more separate community development. Degree of integration sought varies.'
      }
    ],
    synoptic_links: [
      'Compare with liberal individualist society',
      'Link to conservative organic nation',
      'Connect to socialist classless society'
    ],
    examples: [
      {
        title: 'Parekh\'s intercultural dialogue',
        context: 'Society based on dialogue between cultures, mutual learning, shared civic values alongside cultural diversity. Pluralist vision.'
      },
      {
        title: 'Kymlicka\'s liberal multiculturalism',
        context: 'Minority rights within liberal framework. Protect cultural groups but maintain individual rights. Liberal multicultural society.'
      }
    ],
    pitfalls: [
      'Compare different multicultural visions',
      'Use specification thinkers',
      'Consider both shared values and different emphases'
    ]
  },
  {
    id: 'ma144',
    question_id: 'q144',
    arguments_for: [
      {
        title: 'Diversity valuable',
        explanation: 'All multiculturalists see cultural diversity as valuable. Berlin\'s value pluralism, Taylor\'s recognition, Kymlicka\'s minority rights - diversity matters across strands.'
      },
      {
        title: 'Recognition important',
        explanation: 'Taylor\'s politics of recognition widely accepted. Minority cultures deserve acknowledgment and respect. Core multicultural idea.'
      },
      {
        title: 'Against assimilation',
        explanation: 'All multiculturalists reject forced assimilation. Cultures should be able to maintain distinctiveness. Shared opposition to homogenisation.'
      },
      {
        title: 'Identity matters',
        explanation: 'All multiculturalists see cultural identity as important for individuals. Culture shapes self-understanding. Shared premise.'
      }
    ],
    arguments_against: [
      {
        title: 'Different foundations',
        explanation: 'Berlin emphasised value pluralism. Kymlicka works from liberal principles. Parekh has more communitarian basis. Different theoretical starting points.'
      },
      {
        title: 'Group rights contested',
        explanation: 'Kymlicka accepts some group rights. Others worry about threats to individual autonomy. Not unified on group vs individual emphasis.'
      },
      {
        title: 'How to handle illiberal practices',
        explanation: 'What if cultural practices violate liberal values? Different multiculturalists draw different boundaries. Significant disagreement.'
      },
      {
        title: 'Degree of accommodation varies',
        explanation: 'How far should society change to accommodate minorities? Different answers to this practical question across strands.'
      }
    ],
    synoptic_links: [
      'Compare with other ideologies\' core ideas',
      'Link to liberalism on individual rights',
      'Connect to conservatism on tradition'
    ],
    examples: [
      {
        title: 'Taylor\'s politics of recognition',
        context: 'Identity requires recognition from others. Withholding recognition harms minorities. Core multicultural argument for accommodating diversity.'
      },
      {
        title: 'Berlin\'s value pluralism',
        context: 'Multiple incompatible values exist. No single best way to live. Provides philosophical foundation for valuing diversity.'
      }
    ],
    pitfalls: [
      'Identify core ideas and compare thinkers on each',
      'Use specification thinkers',
      'Consider both agreement and disagreement'
    ]
  },
  {
    id: 'ma145',
    question_id: 'q145',
    arguments_for: [
      {
        title: 'Diversity enriches',
        explanation: 'All multiculturalists see diverse society as richer than homogeneous one. Different cultures contribute different perspectives and practices.'
      },
      {
        title: 'Pluralism valued',
        explanation: 'Berlin\'s value pluralism, Parekh\'s intercultural dialogue both celebrate multiple ways of living. Society should contain diversity.'
      },
      {
        title: 'Minorities belong',
        explanation: 'All multiculturalists argue minorities are full members of society. Recognition enables participation. Inclusive society sought.'
      },
      {
        title: 'Against hierarchy',
        explanation: 'All multiculturalists reject idea that some cultures are superior. No cultural imperialism. Equal respect across cultures.'
      }
    ],
    arguments_against: [
      {
        title: 'Cosmopolitan vs communitarian',
        explanation: 'Modood emphasises distinct communities. Others imagine more fluid, hybrid identities. Different visions of how diverse society looks.'
      },
      {
        title: 'Integration levels differ',
        explanation: 'Some multiculturalists accept considerable community separation. Others want more mixing. How integrated should diverse society be?'
      },
      {
        title: 'Public vs private diversity',
        explanation: 'Should cultural difference be mainly private or publicly recognised? Different answers about diversity\'s place in society.'
      },
      {
        title: 'Common values debate',
        explanation: 'What shared values should hold society together? Different views on whether and what common civic culture is needed alongside diversity.'
      }
    ],
    synoptic_links: [
      'Compare with liberal individualist society',
      'Link to conservative national community',
      'Connect to socialist solidarity'
    ],
    examples: [
      {
        title: 'Parekh on British multiculturalism',
        context: 'Rethinking Multiculturalism proposed intercultural dialogue where cultures learn from each other while maintaining distinctiveness.'
      },
      {
        title: 'Modood\'s political multiculturalism',
        context: 'Emphasises public accommodation of religious identities, especially Muslims in Britain. Groups recognised in public sphere.'
      }
    ],
    pitfalls: [
      'Define what kind of society being discussed',
      'Use specification thinkers',
      'Consider both ideals and practical arrangements'
    ]
  },
  {
    id: 'ma146',
    question_id: 'q146',
    arguments_for: [
      {
        title: 'Diversity strengthens',
        explanation: 'Kymlicka and Parekh argue diversity well-managed strengthens social bonds. Recognition enables participation. Inclusive society is cohesive society.'
      },
      {
        title: 'Alternative worse',
        explanation: 'Forced assimilation breeds resentment. Exclusion creates alienation. Multiculturalism offers better path to cohesion than alternatives.'
      },
      {
        title: 'Shared citizenship possible',
        explanation: 'Modood argues multicultural citizenship compatible with social cohesion. Civic values can be shared while cultural diversity maintained.'
      },
      {
        title: 'Integration not separation',
        explanation: 'Multiculturalists generally seek integration, not separation. Diversity within common framework, not fragmentation.'
      }
    ],
    arguments_against: [
      {
        title: 'Cohesion concerns differ',
        explanation: 'Some multiculturalists worry less about cohesion than others. Parekh emphasises dialogue; Kymlicka focuses on rights. Different priority given to cohesion.'
      },
      {
        title: 'Common values debated',
        explanation: 'What shared values are needed? How thick should common culture be? Different multiculturalists give different answers.'
      },
      {
        title: 'Communitarian vs cosmopolitan',
        explanation: 'Some emphasise distinct communities coexisting. Others prefer hybrid, mixed identities. Different cohesion mechanisms imagined.'
      },
      {
        title: 'Practical challenges acknowledged',
        explanation: 'Multiculturalists acknowledge diversity creates challenges. Disagree about how serious challenges are and how to address them.'
      }
    ],
    synoptic_links: [
      'Link to conservative concern for social order',
      'Compare with liberal individualist cohesion',
      'Connect to socialist solidarity'
    ],
    examples: [
      {
        title: 'Parekh Report 2000',
        context: 'Future of Multi-Ethnic Britain proposed reconciling diversity with cohesion through shared values and intercultural dialogue.'
      },
      {
        title: 'Cantle Report 2001',
        context: 'After northern riots, emphasised community cohesion and integration. Showed tensions between diversity and cohesion in practice.'
      }
    ],
    pitfalls: [
      'Compare different multiculturalist views on cohesion',
      'Use specification thinkers',
      'Consider both theoretical and practical dimensions'
    ]
  },
  {
    id: 'ma147',
    question_id: 'q147',
    arguments_for: [
      {
        title: 'All value individual rights',
        explanation: 'Kymlicka explicitly works within liberal framework. All multiculturalists accept basic individual rights. No multiculturalist rejects individual freedom entirely.'
      },
      {
        title: 'Group rights for individuals',
        explanation: 'Kymlicka argues group rights serve individual autonomy. Culture provides context for individual choice. Group rights enhance not threaten individuals.'
      },
      {
        title: 'Exit rights emphasised',
        explanation: 'Most multiculturalists emphasise right to leave cultural group. Individual choice protected even within group rights framework.'
      },
      {
        title: 'Internal minorities protected',
        explanation: 'Multiculturalists generally oppose cultural practices that oppress members. Women\'s rights within cultures matter. Individual protection important.'
      }
    ],
    arguments_against: [
      {
        title: 'Liberal vs pluralist approaches',
        explanation: 'Kymlicka prioritises individuals; Parekh gives more weight to communities. Different balance between group and individual struck.'
      },
      {
        title: 'Illiberal practices dilemma',
        explanation: 'When cultural practices conflict with individual rights, what prevails? Different multiculturalists draw line differently. Significant disagreement.'
      },
      {
        title: 'Group representation debated',
        explanation: 'How should groups be represented? Who speaks for them? Risk of empowering conservative voices within groups. Representation contested.'
      },
      {
        title: 'Autonomy vs authenticity',
        explanation: 'Liberal emphasis on individual choice may conflict with communitarian emphasis on cultural authenticity. Different values prioritised.'
      }
    ],
    synoptic_links: [
      'Link to liberal individual rights',
      'Compare with conservative community emphasis',
      'Connect to socialist collective rights'
    ],
    examples: [
      {
        title: 'Kymlicka on internal restrictions',
        context: 'Distinguished external protections (good) from internal restrictions (bad). Groups shouldn\'t restrict members\' freedom. Liberal multiculturalism.'
      },
      {
        title: 'Forced marriage debate',
        context: 'Cultural practice vs individual rights conflict. Multiculturalists generally oppose practices that harm individuals. But who defines harm?'
      }
    ],
    pitfalls: [
      'Compare different multiculturalist positions',
      'Use specification thinkers',
      'Consider specific cases where tensions arise'
    ]
  },
  // Political Ideas - Nationalism
  {
    id: 'ma148',
    question_id: 'q148',
    arguments_for: [
      {
        title: 'Nation-state as ideal',
        explanation: 'All nationalists believe nation should have its own state. Mazzini\'s Italy, Garvey\'s African state, Rousseau\'s republic - political expression of nation shared goal.'
      },
      {
        title: 'Self-determination',
        explanation: 'Mazzini\'s principle that nations have right to self-government accepted across strands. Liberal, conservative, anti-colonial nationalists agree.'
      },
      {
        title: 'State expresses nation',
        explanation: 'For all nationalists, state should reflect and serve the nation. Political institutions embody national character. Shared state-nation connection.'
      },
      {
        title: 'Sovereignty valued',
        explanation: 'National sovereignty - freedom from external domination - valued by all nationalists. State must be independent to express national will.'
      }
    ],
    arguments_against: [
      {
        title: 'Liberal vs expansionist',
        explanation: 'Mazzini saw nation-states coexisting peacefully. Maurras\' integral nationalism sought expansion. Very different views on state\'s external role.'
      },
      {
        title: 'State\'s internal role',
        explanation: 'Liberal nationalists want limited state respecting rights. Conservative nationalists want strong state enforcing tradition. Different internal state roles.'
      },
      {
        title: 'Civic vs ethnic state',
        explanation: 'Civic nationalists see state based on citizenship. Ethnic nationalists see state based on blood. Different state-nation relationships.'
      },
      {
        title: 'International relations',
        explanation: 'Mazzini believed in international cooperation. Maurras was aggressive nationalist. Different views on state\'s place in international order.'
      }
    ],
    synoptic_links: [
      'Compare with liberal minimal state',
      'Link to conservative organic state',
      'Connect to socialist workers\' state'
    ],
    examples: [
      {
        title: 'Mazzini\'s liberal nationalism',
        context: 'Italian unification would create nation-state respecting citizens\' rights. Nation-states would cooperate internationally. Liberal state.'
      },
      {
        title: 'Maurras\' integral nationalism',
        context: 'Strong, authoritarian French state. Traditional institutions, Catholic values, monarchist preference. Very different state conception.'
      }
    ],
    pitfalls: [
      'Compare different nationalist views of state',
      'Use specification thinkers',
      'Distinguish internal and external state roles'
    ]
  },
  {
    id: 'ma149',
    question_id: 'q149',
    arguments_for: [
      {
        title: 'Universal principle',
        explanation: 'Mazzini established self-determination as right of all nations. Anti-colonial nationalists (Garvey) applied it to colonised peoples. Shared principle across strands.'
      },
      {
        title: 'Nations should govern themselves',
        explanation: 'All nationalists believe nations should not be ruled by foreigners. Independence and sovereignty shared goals. Self-determination core value.'
      },
      {
        title: 'Democratic legitimacy',
        explanation: 'Rousseau linked nation to popular sovereignty. Nations have right to determine own government. Self-determination as democratic principle.'
      },
      {
        title: 'Applied to all nations',
        explanation: 'Even conservative nationalists like Herder valued each nation\'s distinctiveness. Every nation deserves its own expression. Universal application.'
      }
    ],
    arguments_against: [
      {
        title: 'Expansionist contradiction',
        explanation: 'Maurras\' integral nationalism denied self-determination to others. French greatness more important than other nations\' rights. Not universally applied.'
      },
      {
        title: 'Which nations count?',
        explanation: 'Who decides what constitutes a nation? Some nationalists recognise only their own. Self-determination may be selectively applied.'
      },
      {
        title: 'Different applications',
        explanation: 'Mazzini saw self-determination leading to international cooperation. Others see it justifying isolation or aggression. Implications differ.'
      },
      {
        title: 'Minority nations problem',
        explanation: 'Self-determination for one nation may oppress minorities within it. Different nationalists handle this differently or ignore it.'
      }
    ],
    synoptic_links: [
      'Link to liberal individual self-determination',
      'Compare with socialist internationalism',
      'Connect to anti-colonialism'
    ],
    examples: [
      {
        title: 'Mazzini\'s Young Italy',
        context: 'Italian self-determination would inspire other nations. Free nations would cooperate. Self-determination as progressive principle.'
      },
      {
        title: 'Garvey\'s Pan-Africanism',
        context: 'Applied self-determination to African peoples. Black nationalism as anti-colonial self-determination. Universal principle for colonised.'
      }
    ],
    pitfalls: [
      'Compare different applications of self-determination',
      'Use specification thinkers',
      'Consider whether principle is consistently applied'
    ]
  },
  {
    id: 'ma150',
    question_id: 'q150',
    arguments_for: [
      {
        title: 'Nation central',
        explanation: 'All nationalists place nation at centre of political life. Herder, Mazzini, Maurras, Garvey - whatever else divides them, nation is primary value.'
      },
      {
        title: 'Self-determination shared',
        explanation: 'All believe nations have right to self-government. This principle unites liberal, conservative, anti-colonial nationalists.'
      },
      {
        title: 'National identity matters',
        explanation: 'All nationalists see national identity as important for individuals. Belonging to nation gives meaning and purpose. Shared premise.'
      },
      {
        title: 'Opposition to foreign rule',
        explanation: 'All nationalists oppose external domination of nation. National sovereignty valued across strands. United in this negative.'
      }
    ],
    arguments_against: [
      {
        title: 'Liberal vs expansionist',
        explanation: 'Mazzini\'s peaceful coexistence vs Maurras\' aggression. Fundamental disagreement about nationalism\'s implications for international relations.'
      },
      {
        title: 'Civic vs ethnic nation',
        explanation: 'Rousseau\'s civic nation vs Herder\'s cultural nation. Different definitions of what constitutes nation. Major internal divide.'
      },
      {
        title: 'Progressive vs reactionary',
        explanation: 'Mazzini\'s liberating nationalism vs Maurras\' authoritarian nationalism. Can be progressive or reactionary force. Different political implications.'
      },
      {
        title: 'Inclusive vs exclusive',
        explanation: 'Civic nationalism includes all citizens. Ethnic nationalism excludes non-members. Radically different regarding who belongs.'
      }
    ],
    synoptic_links: [
      'Compare with other ideologies\' unity/division',
      'Link to debates about ideology coherence',
      'Connect to nationalism\'s contested nature'
    ],
    examples: [
      {
        title: 'Mazzini vs Maurras',
        context: 'Liberal vs integral nationalism. Peaceful coexistence vs aggressive expansion. Shows range within nationalism.'
      },
      {
        title: 'Herder\'s cultural nationalism',
        context: 'Valued all nations\' distinctiveness. Cultural not political emphasis. Different from both Mazzini and Maurras.'
      }
    ],
    pitfalls: [
      'Compare different strands systematically',
      'Use specification thinkers',
      'Consider both unifying and dividing features'
    ]
  },
  {
    id: 'ma151',
    question_id: 'q151',
    arguments_for: [
      {
        title: 'Need for belonging',
        explanation: 'Nationalists see humans as needing community and belonging. Nation provides identity and meaning. Without national attachment, individuals lost.'
      },
      {
        title: 'Conservative nationalism',
        explanation: 'Herder and conservative nationalists see humans as shaped by particular cultures, not universal rationality. Humans are culturally embedded, not abstract individuals.'
      },
      {
        title: 'Against liberal individualism',
        explanation: 'Nationalists reject view of humans as autonomous individuals choosing identities. National identity is given not chosen. Communitarian human nature.'
      },
      {
        title: 'Order needed',
        explanation: 'Some nationalists believe strong national community needed to maintain order. Without national bonds, social cohesion threatened.'
      }
    ],
    arguments_against: [
      {
        title: 'Liberal nationalism optimistic',
        explanation: 'Mazzini believed in human progress and cooperation between free nations. Not pessimistic about human nature. Progressive nationalism.'
      },
      {
        title: 'Rousseau\'s view',
        explanation: 'Rousseau believed in natural human goodness corrupted by society. General will reflects common good. Optimistic about what nations can achieve.'
      },
      {
        title: 'Anti-colonial optimism',
        explanation: 'Garvey\'s Black nationalism aimed at liberation and empowerment. Believed in African peoples\' capacity for self-government. Optimistic nationalism.'
      },
      {
        title: 'National awakening possible',
        explanation: 'Nationalists believe nations can awaken and achieve greatness. This implies human capacity for collective improvement. Not simply pessimistic.'
      }
    ],
    synoptic_links: [
      'Compare with conservative pessimistic human nature',
      'Link to liberal optimistic human nature',
      'Connect to socialist malleable human nature'
    ],
    examples: [
      {
        title: 'Herder\'s Volksgeist',
        context: 'Each nation has distinctive spirit or character. Humans are shaped by their national culture. Cultural determinist view of human nature.'
      },
      {
        title: 'Mazzini\'s vision',
        context: 'Free nations cooperating for humanity\'s progress. Believed in human capacity for improvement through national liberation. Optimistic nationalism.'
      }
    ],
    pitfalls: [
      'Compare different nationalists\' views',
      'Use specification thinkers',
      'Avoid assuming all nationalists are conservative'
    ]
  },
  {
    id: 'ma152',
    question_id: 'q152',
    arguments_for: [
      {
        title: 'Self-determination shared',
        explanation: 'All nationalists believe nations should govern themselves. State should reflect and serve nation. This links state and nation across strands.'
      },
      {
        title: 'Sovereignty valued',
        explanation: 'National sovereignty - independence from external control - valued by all nationalists. State must be free to express national will.'
      },
      {
        title: 'State expresses nation',
        explanation: 'Nationalists agree state should embody national character. Political institutions reflect national culture and values.'
      },
      {
        title: 'Nation-state as ideal',
        explanation: 'Mazzini established nation-state as nationalist goal. Political and national boundaries should coincide. Shared ideal.'
      }
    ],
    arguments_against: [
      {
        title: 'Different state roles',
        explanation: 'Liberal nationalists want limited state respecting rights. Integral nationalists want strong authoritarian state. Internal state role disputed.'
      },
      {
        title: 'Civic vs ethnic state',
        explanation: 'Civic nationalists see state based on citizenship principles. Ethnic nationalists see state serving ethnic nation. Different state-nation relationships.'
      },
      {
        title: 'International role differs',
        explanation: 'Mazzini saw nation-states cooperating. Maurras saw French state competing and expanding. Different external state roles.'
      },
      {
        title: 'Anti-colonial variations',
        explanation: 'Post-colonial nationalists face questions about what kind of state to build. Different answers in different contexts. No unified view.'
      }
    ],
    synoptic_links: [
      'Compare with liberal minimal state',
      'Link to conservative organic state',
      'Connect to socialist view of state'
    ],
    examples: [
      {
        title: 'Mazzini\'s republic',
        context: 'Italian nation-state would be liberal republic respecting citizens\' rights. Limited state serving free nation.'
      },
      {
        title: 'Maurras\' integral nationalism',
        context: 'Strong French state, possibly monarchist, enforcing national tradition. Authoritarian state serving nation differently conceived.'
      }
    ],
    pitfalls: [
      'Compare different nationalist state conceptions',
      'Use specification thinkers',
      'Distinguish principles from specific state forms'
    ]
  },
  {
    id: 'ma153',
    question_id: 'q153',
    arguments_for: [
      {
        title: 'Civic vs ethnic nation',
        explanation: 'Rousseau\'s civic nation based on shared citizenship vs Herder\'s cultural nation based on shared language and culture. Fundamentally different definitions.'
      },
      {
        title: 'Political vs cultural basis',
        explanation: 'Some nationalists define nation politically (will to live together). Others define it culturally (shared heritage). Major disagreement on nation\'s foundation.'
      },
      {
        title: 'Inclusive vs exclusive',
        explanation: 'Civic nationalism potentially inclusive - anyone can join. Ethnic nationalism exclusive - membership by birth. Different boundaries.'
      },
      {
        title: 'Objective vs subjective',
        explanation: 'Is nation objective fact (language, ethnicity) or subjective choice (desire to belong)? Different nationalists answer differently.'
      }
    ],
    arguments_against: [
      {
        title: 'Shared emphasis on nation',
        explanation: 'All nationalists see nation as primary political unit. Whatever its basis, nation matters most. Agreement on nation\'s importance.'
      },
      {
        title: 'Self-determination applies',
        explanation: 'Whether civic or ethnic, nation deserves self-government. Definition may differ but principle of self-determination shared.'
      },
      {
        title: 'National identity valued',
        explanation: 'All nationalists see national belonging as important for individuals. Herder and Rousseau both value what nation provides.'
      },
      {
        title: 'Historical nation',
        explanation: 'Most nationalists see nations as historically developed communities. Shared understanding that nations have histories even if defined differently.'
      }
    ],
    synoptic_links: [
      'Compare with liberal view of citizenship',
      'Link to conservative organic community',
      'Connect to socialist class vs nation'
    ],
    examples: [
      {
        title: 'Herder\'s Volksgeist',
        context: 'Each nation has distinctive spirit expressed in language and culture. Cultural, organic nation definition.'
      },
      {
        title: 'Rousseau\'s general will',
        context: 'Nation formed by citizens choosing to live under shared laws. Civic, political nation definition.'
      }
    ],
    pitfalls: [
      'Define civic and ethnic nationalism clearly',
      'Use specification thinkers',
      'Consider implications of different definitions'
    ]
  },
  {
    id: 'ma154',
    question_id: 'q154',
    arguments_for: [
      {
        title: 'National community central',
        explanation: 'All nationalists see society as national community. Nation is primary social bond. Shared understanding of society as national.'
      },
      {
        title: 'Organic metaphor',
        explanation: 'Herder and conservative nationalists see nation as organic community evolved over time. Society is living whole, not collection of individuals.'
      },
      {
        title: 'Common culture valued',
        explanation: 'All nationalists value shared culture, traditions, ways of life. Society held together by common national culture.'
      },
      {
        title: 'Solidarity within nation',
        explanation: 'National solidarity - bonds between compatriots - valued across strands. Society is community of shared fate.'
      }
    ],
    arguments_against: [
      {
        title: 'Civic vs ethnic society',
        explanation: 'Civic nationalists see society based on shared citizenship. Ethnic nationalists see society based on shared descent. Different social foundations.'
      },
      {
        title: 'Homogeneous vs diverse',
        explanation: 'Some nationalists want culturally homogeneous society. Others accept diversity within nation. Different views on social composition.'
      },
      {
        title: 'Liberal vs authoritarian',
        explanation: 'Mazzini wanted free society with individual rights. Maurras wanted ordered society with traditional hierarchy. Different social structures.'
      },
      {
        title: 'International vs isolated',
        explanation: 'Mazzini believed in international society of free nations. Others want national society insulated from foreign influence. Different external relations.'
      }
    ],
    synoptic_links: [
      'Compare with conservative organic society',
      'Link to liberal individualist society',
      'Connect to socialist class society'
    ],
    examples: [
      {
        title: 'Herder\'s cultural nationalism',
        context: 'Society as cultural community with distinctive Volksgeist. Organic social whole expressing national spirit.'
      },
      {
        title: 'Mazzini\'s civic vision',
        context: 'Society of free citizens sharing republican values. Liberal national society with rights protected.'
      }
    ],
    pitfalls: [
      'Compare different nationalist social visions',
      'Use specification thinkers',
      'Consider both internal society and external relations'
    ]
  },
  {
    id: 'ma155',
    question_id: 'q155',
    arguments_for: [
      {
        title: 'Self-determination applies to nations',
        explanation: 'All nationalists agree nations deserve self-government. Whatever constitutes nation, it has this right. Shared principle.'
      },
      {
        title: 'National identity matters',
        explanation: 'All nationalists agree national belonging is important. Whether civic or ethnic, national identity shapes individuals.'
      },
      {
        title: 'Community and belonging',
        explanation: 'Herder and Rousseau both see nation providing community. Different definitions but shared function - giving people belonging.'
      },
      {
        title: 'Historical development',
        explanation: 'Most nationalists see nations as historically developed. Not arbitrary units but evolved communities with shared histories.'
      }
    ],
    arguments_against: [
      {
        title: 'Civic vs ethnic',
        explanation: 'Rousseau\'s political nation vs Herder\'s cultural nation. Fundamental disagreement on nation\'s basis - choice vs birth.'
      },
      {
        title: 'Objective vs subjective',
        explanation: 'Is nation defined by objective features (language, descent) or subjective will (desire to belong)? Different answers.'
      },
      {
        title: 'Who can belong',
        explanation: 'Civic nation potentially open to newcomers. Ethnic nation defined by ancestry. Different membership criteria.'
      },
      {
        title: 'Natural vs constructed',
        explanation: 'Some see nations as natural entities. Others see them as socially constructed. Different ontologies of the nation.'
      }
    ],
    synoptic_links: [
      'Link to debates about national identity',
      'Compare with conservative organic community',
      'Connect to liberal voluntarism'
    ],
    examples: [
      {
        title: 'Herder\'s Volksgeist',
        context: 'Each Volk has distinctive spirit expressed in language, art, traditions. Cultural definition of nation.'
      },
      {
        title: 'Rousseau\'s social contract',
        context: 'Citizens united by shared laws and general will. Political definition based on common commitment.'
      }
    ],
    pitfalls: [
      'Define different nation concepts clearly',
      'Use specification thinkers',
      'Consider practical implications of definitions'
    ]
  },
  {
    id: 'ma156',
    question_id: 'q156',
    arguments_for: [
      {
        title: 'Nation-state shared goal',
        explanation: 'All nationalists believe nation should have its own state. State expresses and serves nation. Agreement on nation-state ideal.'
      },
      {
        title: 'Self-determination',
        explanation: 'Nations have right to govern themselves. Mazzini, Garvey, even Herder accept this principle. Shared core.'
      },
      {
        title: 'Sovereignty valued',
        explanation: 'National sovereignty - independence from external control - matters to all nationalists. State must be free.'
      },
      {
        title: 'Political expression of nation',
        explanation: 'State should reflect national character and serve national interests. Agreement on state-nation connection.'
      }
    ],
    arguments_against: [
      {
        title: 'Internal state role differs',
        explanation: 'Liberal nationalists want limited state. Integral nationalists want strong authoritarian state. Very different state conceptions.'
      },
      {
        title: 'Rights emphasis varies',
        explanation: 'Mazzini emphasised individual rights within nation-state. Maurras subordinated individual to nation. Different state-individual relationships.'
      },
      {
        title: 'International role differs',
        explanation: 'Mazzini envisioned cooperative nation-states. Maurras envisioned competitive struggle. Different external state roles.'
      },
      {
        title: 'Civic vs ethnic state',
        explanation: 'State based on citizenship principles vs state based on ethnic nation. Different state-nation relationships.'
      }
    ],
    synoptic_links: [
      'Compare with other ideologies on the state',
      'Link to liberal minimal state',
      'Connect to conservative organic state'
    ],
    examples: [
      {
        title: 'Mazzini\'s liberal state',
        context: 'Italian nation-state respecting rights, cooperating internationally. Liberal nationalist state conception.'
      },
      {
        title: 'Maurras\' integral nationalism',
        context: 'Strong French state, authoritarian, placing nation above individual. Different state conception.'
      }
    ],
    pitfalls: [
      'Compare different nationalist state conceptions',
      'Use specification thinkers',
      'Consider both internal and external state roles'
    ]
  },
  {
    id: 'ma157',
    question_id: 'q157',
    arguments_for: [
      {
        title: 'Universal principle',
        explanation: 'Mazzini established self-determination for all nations. Anti-colonial nationalists (Garvey) applied it universally. Principle for all not just some.'
      },
      {
        title: 'Core nationalist value',
        explanation: 'All nationalists believe their nation deserves self-government. Even if not universally applied, self-determination is consistently valued as principle.'
      },
      {
        title: 'Against foreign rule',
        explanation: 'All nationalists oppose external domination of their nation. Self-determination is liberation from foreign control. Consistent opposition.'
      },
      {
        title: 'Nation has rights',
        explanation: 'All nationalists see nation as having collective right to self-government. This right is consistent across strands.'
      }
    ],
    arguments_against: [
      {
        title: 'Inconsistent application',
        explanation: 'Maurras\' integral nationalism denied self-determination to others. French interests trumped others\' rights. Selective application.'
      },
      {
        title: 'Which nations qualify?',
        explanation: 'Nationalists disagree about which groups count as nations. Some recognise only their own. Principle applied inconsistently.'
      },
      {
        title: 'Expansion contradicts',
        explanation: 'Expansionist nationalism denies self-determination to conquered peoples. Aggressive nationalism inconsistent with universal self-determination.'
      },
      {
        title: 'Minority nations',
        explanation: 'Self-determination for one nation may oppress minorities. Different nationalists handle or ignore this differently.'
      }
    ],
    synoptic_links: [
      'Link to liberal individual self-determination',
      'Compare with socialist internationalism',
      'Connect to anti-colonial movements'
    ],
    examples: [
      {
        title: 'Mazzini\'s vision',
        context: 'Free nations cooperating peacefully. Self-determination for all, leading to harmony. Consistent principle.'
      },
      {
        title: 'Maurras\' integral nationalism',
        context: 'French greatness paramount. Others\' self-determination subordinate to French interests. Inconsistent application.'
      }
    ],
    pitfalls: [
      'Compare different nationalists on self-determination',
      'Use specification thinkers',
      'Consider whether principle is consistently held or applied'
    ]
  },
  {
    id: 'ma158',
    question_id: 'q158',
    arguments_for: [
      {
        title: 'All value national identity',
        explanation: 'Whether civic or ethnic, all nationalists see national belonging as important. Nation provides identity, meaning, community. Shared recognition.'
      },
      {
        title: 'Self-determination applies',
        explanation: 'All nationalists believe nations (however defined) deserve self-government. Shared principle across definitions.'
      },
      {
        title: 'Historical community',
        explanation: 'Most nationalists see nations as historically developed. Whatever constitutes them, nations have histories and continuity.'
      },
      {
        title: 'Against foreign rule',
        explanation: 'All nationalists oppose nations being ruled by outsiders. Whatever defines nation, it should be self-governing.'
      }
    ],
    arguments_against: [
      {
        title: 'Civic vs ethnic foundation',
        explanation: 'Rousseau\'s civic nation (political choice) vs Herder\'s ethnic nation (cultural inheritance). Fundamentally different bases.'
      },
      {
        title: 'Inclusive vs exclusive',
        explanation: 'Civic nationalism potentially open; ethnic nationalism closed. Very different implications for who belongs.'
      },
      {
        title: 'Political vs cultural emphasis',
        explanation: 'Some emphasise shared political values, others shared cultural heritage. Different aspects of nationhood prioritised.'
      },
      {
        title: 'Natural vs constructed',
        explanation: 'Some see nations as natural entities. Others see them as socially constructed. Different views on nation\'s ontology.'
      }
    ],
    synoptic_links: [
      'Link to debates about identity',
      'Compare with conservative organic community',
      'Connect to liberal voluntarism'
    ],
    examples: [
      {
        title: 'Rousseau\'s general will',
        context: 'Nation formed by citizens\' will to live under shared laws. Political, voluntary nation.'
      },
      {
        title: 'Herder\'s Volksgeist',
        context: 'Nation defined by distinctive culture, language, spirit. Cultural, inherited nation.'
      }
    ],
    pitfalls: [
      'Define different conceptions of nation',
      'Use specification thinkers',
      'Consider implications of different definitions'
    ]
  },
  {
    id: 'ma159',
    question_id: 'q159',
    arguments_for: [
      {
        title: 'Mazzini\'s internationalism',
        explanation: 'Believed free nations would cooperate in "brotherhood of nations." Nationalism compatible with, indeed requiring, internationalism.'
      },
      {
        title: 'Anti-colonial solidarity',
        explanation: 'Garvey\'s Pan-Africanism combined Black nationalism with African solidarity. National liberation connected to international movement.'
      },
      {
        title: 'Nations can cooperate',
        explanation: 'Liberal nationalists see international order of nation-states. Self-determination for all leads to peaceful coexistence.'
      },
      {
        title: 'Universal principle',
        explanation: 'Self-determination as universal right implies recognising all nations\' rights. Nationalism contains internationalist element.'
      }
    ],
    arguments_against: [
      {
        title: 'Integral nationalism rejects',
        explanation: 'Maurras\' nationalism was aggressive and competitive. International order threatened French greatness. Anti-internationalist strand.'
      },
      {
        title: 'National interest first',
        explanation: 'Many nationalists prioritise national interest over international cooperation. Internationalism subordinate to nationalism.'
      },
      {
        title: 'Ethnic nationalism exclusive',
        explanation: 'Ethnic nationalism emphasises boundaries between nations. Less compatible with internationalist cooperation. Exclusivist tendency.'
      },
      {
        title: 'Competition inherent',
        explanation: 'Multiple nation-states competing for resources and prestige. Nationalism may inherently create international conflict.'
      }
    ],
    synoptic_links: [
      'Compare with socialist internationalism',
      'Link to liberal international order',
      'Connect to conservative scepticism of internationalism'
    ],
    examples: [
      {
        title: 'Mazzini\'s Young Europe',
        context: 'Organisation to promote national movements across Europe. National liberation as international project. Nationalism and internationalism combined.'
      },
      {
        title: 'Maurras\' integral nationalism',
        context: 'France first, others subordinate. International cooperation threatens national distinctiveness. Nationalism against internationalism.'
      }
    ],
    pitfalls: [
      'Compare different nationalist views on international order',
      'Use specification thinkers',
      'Consider whether nationalism and internationalism are compatible'
    ]
  },
  // UK Politics - Democracy and Participation
  {
    id: 'ma160',
    question_id: 'q160',
    arguments_for: [
      {
        title: 'Declining turnout',
        explanation: 'General election turnout fell from 83% (1950) to 67% (2019). 2024 saw just 60% turnout - lowest since 2001. Suggests democratic disengagement.'
      },
      {
        title: 'Party membership collapse',
        explanation: 'Major party membership has plummeted from millions to hundreds of thousands. Labour and Conservative combined membership fraction of historic levels.'
      },
      {
        title: 'Trust in politicians low',
        explanation: 'Ipsos MORI polls consistently show politicians among least trusted professions. Expenses scandal, sleaze, and broken promises erode democratic trust.'
      },
      {
        title: 'Unrepresentative outcomes',
        explanation: 'FPTP produces governments with minority popular vote support. 2019: Conservatives won 56% of seats with 43.6% of votes. Democratic deficit.'
      }
    ],
    arguments_against: [
      {
        title: 'Referendums engage public',
        explanation: '2014 Scottish referendum (84.6% turnout), 2016 EU referendum (72.2%) show public engages on constitutional issues. Crisis overstated.'
      },
      {
        title: 'Alternative participation',
        explanation: 'Pressure groups, online activism, protests show participation shifted rather than declined. Just Stop Oil, Extinction Rebellion demonstrate engagement.'
      },
      {
        title: 'Elections still legitimate',
        explanation: 'Peaceful transfers of power, accepted results, functioning government. Core democratic processes work. Crisis is exaggerated.'
      },
      {
        title: 'International comparison',
        explanation: 'UK turnout comparable to other democracies. US turnout historically lower. UK democracy not uniquely in crisis.'
      }
    ],
    synoptic_links: [
      'Link to debates about electoral reform',
      'Connect to pressure group participation',
      'Compare with theories of democracy'
    ],
    examples: [
      {
        title: '2024 general election',
        context: '60% turnout, lowest since 2001. Labour landslide with only 34% of votes cast. Shows both engagement issues and FPTP distortions.'
      },
      {
        title: 'Scottish independence referendum 2014',
        context: '84.6% turnout showed public can engage intensely on constitutional questions. Suggests issue is what\'s at stake, not crisis of democracy.'
      }
    ],
    pitfalls: [
      'Define what "crisis" means',
      'Consider both quantity and quality of participation',
      'Reference specific data on turnout and engagement'
    ]
  },
  {
    id: 'ma161',
    question_id: 'q161',
    arguments_for: [
      {
        title: 'Insider access limited',
        explanation: 'Government consults groups it chooses. Many pressure groups are outsiders with no direct access. Think tanks may be ignored if not aligned with government.'
      },
      {
        title: 'Government has electoral mandate',
        explanation: 'Elected government has mandate to implement manifesto. Pressure groups and lobbyists are unelected. Democracy limits unelected influence.'
      },
      {
        title: 'Party discipline prevails',
        explanation: 'MPs follow whip more than respond to lobbying. Party loyalty trumps external pressure. Government usually gets its way.'
      },
      {
        title: 'Policy decided by ministers',
        explanation: 'Think tanks provide ideas but ministers decide. Policy Exchange or IPPR may recommend but government chooses. Ultimate power with elected.'
      }
    ],
    arguments_against: [
      {
        title: 'Insider groups influential',
        explanation: 'BMA, NFU, CBI have regular government access. Consulted on policy development. Real influence on health, agriculture, business policy.'
      },
      {
        title: 'Think tanks shape agenda',
        explanation: 'IEA influenced Thatcherism, IPPR influenced New Labour. Policy ideas adopted by parties. Think tanks provide intellectual framework.'
      },
      {
        title: 'Lobbying affects legislation',
        explanation: 'Corporate lobbying secures favourable regulations. Professional lobbyists connect clients to decision-makers. Influence real if often hidden.'
      },
      {
        title: 'Campaigns change outcomes',
        explanation: 'Gurkha Justice Campaign won settlement rights. Jamie Oliver\'s school dinners campaign changed policy. Direct impact on government.'
      }
    ],
    synoptic_links: [
      'Link to pluralism vs elitism debate',
      'Connect to parliamentary sovereignty',
      'Compare with US lobbying'
    ],
    examples: [
      {
        title: 'BMA influence',
        context: 'British Medical Association regularly consulted on health policy. Junior doctors\' strikes forced government negotiation. Insider access delivers influence.'
      },
      {
        title: 'Gurkha Justice Campaign',
        context: 'Joanna Lumley\'s campaign won right to remain for Gurkha veterans. Government reversed policy under public pressure. Shows outsider success possible.'
      }
    ],
    pitfalls: [
      'Distinguish between different types of groups',
      'Consider both insider and outsider strategies',
      'Reference specific examples of success and failure'
    ]
  },
  {
    id: 'ma162',
    question_id: 'q162',
    arguments_for: [
      {
        title: 'Human Rights Act came from government',
        explanation: 'HRA 1998 was government legislation incorporating ECHR. Fundamental rights protection through parliamentary action, not pressure groups.'
      },
      {
        title: 'Equality legislation statutory',
        explanation: 'Sex Discrimination Act, Race Relations Acts, Equality Act 2010 - all government legislation. Legal framework for rights from Parliament.'
      },
      {
        title: 'Constitutional reform by government',
        explanation: 'Supreme Court, devolution, Freedom of Information - constitutional rights enhanced by government action. Parliament delivers rights.'
      },
      {
        title: 'Pressure groups need law',
        explanation: 'Without legal framework, pressure group achievements are fragile. Legislation entrenches rights. Law trumps campaigning.'
      }
    ],
    arguments_against: [
      {
        title: 'Liberty and civil liberties',
        explanation: 'Liberty (formerly NCCL) campaigned for decades on civil liberties. Challenged detention without trial, surveillance, police powers. Rights advocacy.'
      },
      {
        title: 'Stonewall and LGBTQ+ rights',
        explanation: 'Stonewall campaigned for equal age of consent, civil partnerships, same-sex marriage. Changed political climate enabling legislation.'
      },
      {
        title: 'Fawcett Society and gender equality',
        explanation: 'Century of campaigning for women\'s rights. Suffragettes won the vote. Gender pay gap campaigns continue. Pressure precedes legislation.'
      },
      {
        title: 'Judicial review by groups',
        explanation: 'Pressure groups use courts to protect rights. Article 19 on press freedom, Human Dignity Trust on LGBT rights. Legal action as strategy.'
      }
    ],
    synoptic_links: [
      'Link to Human Rights Act debates',
      'Connect to judiciary role in rights protection',
      'Compare UK and US rights protection'
    ],
    examples: [
      {
        title: 'Same-sex marriage',
        context: 'Stonewall campaigned for decades. Public opinion shifted. Government legislated Marriage (Same Sex Couples) Act 2013. Both contributed.'
      },
      {
        title: 'Belmarsh case',
        context: 'Law lords ruled detention without trial incompatible with ECHR. Liberty intervened in case. Shows courts and groups working together.'
      }
    ],
    pitfalls: [
      'Consider interaction between legislation and campaigning',
      'Reference specific rights achievements',
      'Don\'t assume one or other is solely responsible'
    ]
  },
  {
    id: 'ma163',
    question_id: 'q163',
    arguments_for: [
      {
        title: 'Media sets agenda',
        explanation: 'Newspapers and broadcasters determine what issues are discussed. Daily Mail immigration coverage, Sun political endorsements shape public debate.'
      },
      {
        title: 'Media reach greater',
        explanation: 'Millions read newspapers, watch news, scroll social media. Pressure groups reach smaller audiences. Media amplification essential for campaigns.'
      },
      {
        title: 'Politicians fear media',
        explanation: 'Government responds to media criticism. Negative coverage triggers policy changes. Media holds government to account.'
      },
      {
        title: '"The Sun Wot Won It"',
        explanation: 'Media claims to determine election outcomes. Newspaper endorsements, TV debates, leader images shape voting. Political influence through media power.'
      }
    ],
    arguments_against: [
      {
        title: 'Pressure groups have direct access',
        explanation: 'Insider groups meet ministers directly. BMA negotiates with Health Secretary. Media observes from outside; groups are in the room.'
      },
      {
        title: 'Expertise vs opinion',
        explanation: 'Pressure groups provide technical expertise government needs. NFU knows farming; media has opinions. Government values expert input.'
      },
      {
        title: 'Media influence declining',
        explanation: 'Newspaper readership falling. Social media bypasses traditional media. Sun endorsed Conservatives in 1997; Labour won landslide. Media less decisive.'
      },
      {
        title: 'Groups use media',
        explanation: 'Pressure groups use media strategically. Just Stop Oil generates coverage. Media is tool for groups, not alternative to them.'
      }
    ],
    synoptic_links: [
      'Link to media effects theories',
      'Connect to agenda-setting power',
      'Compare pressure group and media influence'
    ],
    examples: [
      {
        title: 'Leveson Inquiry',
        context: 'Phone hacking scandal showed media power and its limits. Led to regulation of press. Government acted against media interest.'
      },
      {
        title: 'Just Stop Oil',
        context: 'Disruptive protests generate massive media coverage. Shows groups can use media to amplify message. Media as tool.'
      }
    ],
    pitfalls: [
      'Consider how media and groups interact',
      'Reference specific examples',
      'Avoid assuming one dominates completely'
    ]
  },
  {
    id: 'ma164',
    question_id: 'q164',
    arguments_for: [
      {
        title: 'Human Rights Act vulnerable',
        explanation: 'HRA can be repealed by ordinary legislation. Government repeatedly threatens replacement with British Bill of Rights. Rights not entrenched.'
      },
      {
        title: 'Collective rights weak',
        explanation: 'Trade union rights restricted since 1980s. Strike restrictions, ballot requirements limit collective action. Collective dimension of rights undermined.'
      },
      {
        title: 'Terror legislation erodes rights',
        explanation: 'Extended detention, surveillance powers, Prevent strategy restrict civil liberties. Security trumps rights in government approach.'
      },
      {
        title: 'No constitutional protection',
        explanation: 'Unlike US Bill of Rights, UK rights can be changed by Parliament. No Supreme Court power to strike down laws. Rights depend on political will.'
      }
    ],
    arguments_against: [
      {
        title: 'HRA provides protection',
        explanation: 'Courts must interpret legislation compatibly with ECHR. Declarations of incompatibility create political pressure. Rights have legal force.'
      },
      {
        title: 'Equality Act comprehensive',
        explanation: 'Protected characteristics, positive duties on public bodies. Discrimination law robust. Individual equality rights protected.'
      },
      {
        title: 'Judicial review effective',
        explanation: 'Courts hold government to account. Miller cases, Belmarsh, UNISON show judicial willingness to protect rights against government.'
      },
      {
        title: 'ECHR backstop',
        explanation: 'UK remains in Council of Europe. European Court of Human Rights provides ultimate protection. International rights framework.'
      }
    ],
    synoptic_links: [
      'Link to constitutional protection debates',
      'Connect to judiciary role',
      'Compare with US Bill of Rights'
    ],
    examples: [
      {
        title: 'Rwanda policy',
        context: 'Government sought to override court ruling through legislation. Shows rights vulnerable when government determined. But also shows courts resist.'
      },
      {
        title: 'Belmarsh case 2004',
        context: 'Law lords declared detention without trial incompatible with ECHR. Government forced to change approach. Rights protection worked.'
      }
    ],
    pitfalls: [
      'Distinguish individual and collective rights',
      'Consider both formal and practical protection',
      'Reference specific cases and legislation'
    ]
  },
  {
    id: 'ma165',
    question_id: 'q165',
    arguments_for: [
      {
        title: 'Brexit divisiveness',
        explanation: '2016 referendum split nation. Remain/Leave became defining identities. Years of parliamentary paralysis. Society more divided than before.'
      },
      {
        title: 'Advisory but treated as binding',
        explanation: 'Referendums legally advisory but politically binding. Creates tension with parliamentary sovereignty. Mandate unclear when Parliament disagrees.'
      },
      {
        title: 'Complex issues oversimplified',
        explanation: 'EU membership, Scottish independence reduced to binary Yes/No. Nuance lost. Informed choice difficult on complex constitutional questions.'
      },
      {
        title: 'Manipulation and misinformation',
        explanation: 'Brexit campaign controversies over £350m claim, Turkey joining EU. Referendum campaigns can mislead voters. Quality of debate poor.'
      }
    ],
    arguments_against: [
      {
        title: 'Democratic legitimacy',
        explanation: 'Major constitutional changes should have direct popular approval. 2016 referendum gave mandate for Brexit. Representative democracy insufficient for such questions.'
      },
      {
        title: 'Scottish referendum high quality',
        explanation: '2014 Scottish referendum had extensive public engagement, high turnout (84.6%), informed debate. Shows referendums can work well.'
      },
      {
        title: 'Devolution endorsed',
        explanation: '1997 referendums legitimised Scottish Parliament and Welsh Assembly. Devolution has democratic foundation. Referendums serve constitutional purposes.'
      },
      {
        title: 'Public engagement',
        explanation: 'Referendums engage citizens beyond normal politics. Turnout often higher than elections. Democratic participation enhanced.'
      }
    ],
    synoptic_links: [
      'Link to direct vs representative democracy',
      'Connect to parliamentary sovereignty',
      'Compare with other countries\' referendum use'
    ],
    examples: [
      {
        title: 'Brexit referendum 2016',
        context: '52-48 result, years of implementation difficulty, ongoing divisions. Shows both democratic mandate and problems of referendum approach.'
      },
      {
        title: 'Scottish independence 2014',
        context: 'High quality debate, clear result, respected outcome. Shows referendums can work for constitutional questions.'
      }
    ],
    pitfalls: [
      'Evaluate different referendums separately',
      'Consider both process and outcome',
      'Reference specific referendum experiences'
    ]
  },
  {
    id: 'ma166',
    question_id: 'q166',
    arguments_for: [
      {
        title: 'Unelected and unaccountable',
        explanation: 'Pressure groups have no democratic mandate. Leaders not elected by public. Influence without accountability undermines democratic principle.'
      },
      {
        title: 'Unequal resources',
        explanation: 'Corporate lobbying outspends public interest groups. Wealthy interests have disproportionate influence. Elitism not pluralism.'
      },
      {
        title: 'Disruptive tactics',
        explanation: 'Just Stop Oil, Extinction Rebellion cause public disruption. Minority imposing views through disruption rather than persuasion. Undemocratic methods.'
      },
      {
        title: 'Bypass electoral process',
        explanation: 'Groups seek to influence policy outside elections. Circumvent democratic mandate. Undermine government\'s right to govern.'
      }
    ],
    arguments_against: [
      {
        title: 'Pluralist democracy',
        explanation: 'Groups represent diverse interests between elections. Dahl\'s pluralism - democracy is groups competing. Pressure groups enhance representation.'
      },
      {
        title: 'Participation opportunity',
        explanation: 'Groups offer citizens way to participate beyond voting. Membership, campaigning, activism all democratic. Enhance engagement.'
      },
      {
        title: 'Expertise provision',
        explanation: 'Groups provide information and expertise. Improve policy quality. Government needs input from affected interests.'
      },
      {
        title: 'Scrutiny function',
        explanation: 'Groups hold government to account. Watchdog role complements parliamentary scrutiny. Strengthen democratic accountability.'
      }
    ],
    synoptic_links: [
      'Link to pluralism vs elitism',
      'Connect to theories of democracy',
      'Compare with direct action debates'
    ],
    examples: [
      {
        title: 'Just Stop Oil tactics',
        context: 'Road blocking, artwork attacks generate controversy. Critics say undemocratic minority tactics. Supporters say necessary for ignored issue.'
      },
      {
        title: 'BMA negotiations',
        context: 'Professional body negotiating with government on behalf of doctors. Legitimate representation of occupational interest. Democratic complement.'
      }
    ],
    pitfalls: [
      'Consider different types of pressure groups',
      'Define what "undermine democracy" means',
      'Balance participation and accountability arguments'
    ]
  },
  {
    id: 'ma167',
    question_id: 'q167',
    arguments_for: [
      {
        title: 'FPTP favours two parties',
        explanation: 'Electoral system rewards large parties with concentrated support. Liberal Democrats, Greens, Reform UK disadvantaged. Two-party dominance structural.'
      },
      {
        title: 'Government formation',
        explanation: 'Only Labour or Conservative can realistically form government. Coalition 2010-15 exceptional. Westminster is two-party competition.'
      },
      {
        title: 'Resources and recognition',
        explanation: 'Major parties have financial resources, media coverage, organisational capacity minor parties lack. Unequal competition.'
      },
      {
        title: 'Historical dominance',
        explanation: 'Since 1945, only Labour and Conservative have governed. Two-party system deeply entrenched. Other parties are also-rans.'
      }
    ],
    arguments_against: [
      {
        title: 'SNP dominance in Scotland',
        explanation: 'SNP won 48 of 59 Scottish seats in 2019. Third party can dominate regionally. Multi-party reality in Scotland.'
      },
      {
        title: 'Coalition government 2010-15',
        explanation: 'Liberal Democrats in government. Third party shaped policy. Shows multi-party politics can deliver power.'
      },
      {
        title: 'Reform UK impact 2024',
        explanation: 'Reform UK won 4 million votes, helped split right-wing vote. Minor parties can affect outcomes even without seats.'
      },
      {
        title: 'Devolved assemblies multi-party',
        explanation: 'Scottish Parliament, Welsh Senedd have multiple significant parties. Green MSPs, Liberal Democrats, regional parties matter.'
      }
    ],
    synoptic_links: [
      'Link to electoral system effects',
      'Connect to party system typology',
      'Compare Westminster and devolved parliaments'
    ],
    examples: [
      {
        title: 'SNP 2015 landslide',
        context: 'Won 56 of 59 Scottish seats. Transformed Scottish politics. Shows FPTP can deliver third-party breakthrough in right circumstances.'
      },
      {
        title: 'Reform UK 2024',
        context: 'Over 4 million votes, 5 seats. Vote share significant but seats minimal. Shows FPTP barrier to minor parties.'
      }
    ],
    pitfalls: [
      'Consider regional variations',
      'Distinguish votes, seats, and power',
      'Reference recent elections'
    ]
  },
  {
    id: 'ma168',
    question_id: 'q168',
    arguments_for: [
      {
        title: 'Donation scandals',
        explanation: 'Cash for Honours, cash for access scandals show corruption risk. Large donations create perception of buying influence. System undermines trust.'
      },
      {
        title: 'Unequal resources',
        explanation: 'Parties with wealthy donors outspend others. Conservatives typically outspend Labour. Unfair electoral competition.'
      },
      {
        title: 'Declining membership',
        explanation: 'Fewer members means less grassroots funding. Parties dependent on large donors. Reduces internal democracy.'
      },
      {
        title: 'Lack of transparency',
        explanation: 'Despite regulations, donation routes can obscure true sources. Foreign influence concerns. Public doesn\'t know who funds parties.'
      }
    ],
    arguments_against: [
      {
        title: 'Regulations exist',
        explanation: 'PPERA 2000 requires donation disclosure. Electoral Commission oversees. Spending limits in campaigns. System has safeguards.'
      },
      {
        title: 'State funding problems',
        explanation: 'State funding would use taxpayer money for parties. Public may oppose. Could entrench existing parties. Not clearly better.'
      },
      {
        title: 'Freedom of association',
        explanation: 'People should be free to support parties they believe in. Donations are political expression. Limits threaten liberty.'
      },
      {
        title: 'Short Money provides support',
        explanation: 'Opposition parties receive public funds. Policy Development Grants exist. Some state support already provided.'
      }
    ],
    synoptic_links: [
      'Link to democracy and representation',
      'Connect to corruption and trust',
      'Compare with other countries\' funding models'
    ],
    examples: [
      {
        title: 'Cash for Honours',
        context: '2006 scandal over allegations peerages offered for loans. Police investigated. Shows corruption risk from funding system.'
      },
      {
        title: 'Conservative donor access',
        context: 'Leaders\' Group offers access for large donors. Perception of buying influence even if no corruption. Damages trust.'
      }
    ],
    pitfalls: [
      'Consider existing regulations',
      'Evaluate alternatives like state funding',
      'Reference specific scandals and reforms'
    ]
  },
  {
    id: 'ma169',
    question_id: 'q169',
    arguments_for: [
      {
        title: 'SNP transformed Scotland',
        explanation: 'From minor party to governing Scotland and dominating Westminster seats. Independence referendum achieved. Minor party became major force.'
      },
      {
        title: 'UKIP/Brexit Party forced referendum',
        explanation: 'UKIP pressure led Cameron to promise EU referendum. Brexit achieved despite never winning Westminster seats. Minor party huge impact.'
      },
      {
        title: 'Greens in devolved governments',
        explanation: 'Scottish Greens in government with SNP. Green policies on climate advanced. Power through coalition.'
      },
      {
        title: 'Reform UK vote splitting',
        explanation: '2024 election: Reform UK took votes from Conservatives, contributing to landslide defeat. Minor parties affect outcomes.'
      }
    ],
    arguments_against: [
      {
        title: 'FPTP excludes',
        explanation: 'Minor parties win votes but not seats proportionally. Reform UK: 4 million votes, 5 seats. Liberal Democrats historically underrepresented. System blocks minor parties.'
      },
      {
        title: 'Only two can govern',
        explanation: 'Labour or Conservative will form government. Minor parties may influence but don\'t govern UK. Real power with major parties.'
      },
      {
        title: 'Limited policy influence',
        explanation: 'Government can ignore minor party positions. Brexit Party dissolved after Brexit. UKIP irrelevant post-referendum. Influence temporary.'
      },
      {
        title: 'Regional not national',
        explanation: 'SNP only in Scotland, Plaid only in Wales. Not UK-wide alternatives. Regional parties don\'t change UK politics fundamentally.'
      }
    ],
    synoptic_links: [
      'Link to electoral system effects',
      'Connect to party competition theory',
      'Compare Westminster and devolved systems'
    ],
    examples: [
      {
        title: 'UKIP and Brexit',
        context: 'Never won more than 2 Westminster seats but forced EU referendum through pressure on Conservatives. Shows influence without power.'
      },
      {
        title: 'Liberal Democrats 2010-15',
        context: 'Coalition government gave real power - tuition fees, referendum on AV, constitutional reform. Minor party in government.'
      }
    ],
    pitfalls: [
      'Define "significant role"',
      'Consider different types of influence',
      'Reference recent minor party impact'
    ]
  },
  // UK Politics - Electoral Systems
  {
    id: 'ma170',
    question_id: 'q170',
    arguments_for: [
      {
        title: 'Scotland more proportional',
        explanation: 'AMS in Scottish Parliament produces coalition governments, multiple parties represented. Greens, Liberal Democrats have influence. Very different from Westminster.'
      },
      {
        title: 'Northern Ireland power-sharing',
        explanation: 'STV produces multi-party assembly. DUP, Sinn Féin, Alliance, SDLP all represented. Cross-community representation designed into system.'
      },
      {
        title: 'Westminster two-party dominance',
        explanation: 'FPTP gives disproportionate results. 2019: Conservatives 56% seats on 43% votes. Two parties dominate despite multi-party voting.'
      },
      {
        title: 'Minor party representation',
        explanation: 'Greens have Scottish Parliament seats, London Assembly seats. Would have few or no Westminster seats. Electoral system determines representation.'
      }
    ],
    arguments_against: [
      {
        title: 'Outcome depends on votes',
        explanation: 'Electoral systems translate votes into seats but voting patterns matter too. SNP dominates under both AMS and FPTP in Scotland. Votes drive outcomes.'
      },
      {
        title: 'AMS still produces disproportionality',
        explanation: 'Scottish Parliament not perfectly proportional. SNP won majority in 2011 on minority vote. AMS has FPTP constituency element.'
      },
      {
        title: 'London mayors same winner',
        explanation: 'Supplementary Vote (until 2024) and FPTP both elected Labour mayors. System change didn\'t change outcomes.'
      },
      {
        title: 'Voter preference matters more',
        explanation: 'Party success depends on policies, leaders, campaigns. Electoral system is one factor among many determining representation.'
      }
    ],
    synoptic_links: [
      'Link to electoral system theory',
      'Connect to representation concepts',
      'Compare different UK electoral systems'
    ],
    examples: [
      {
        title: 'Scottish Parliament 2021',
        context: 'AMS produced SNP-Green government. Multiple parties represented. Different outcome than FPTP would produce.'
      },
      {
        title: '2024 mayoral elections',
        context: 'Switch from SV to FPTP for mayors. Labour still won London. System change, same outcome in this case.'
      }
    ],
    pitfalls: [
      'Compare specific elections under different systems',
      'Consider proportionality measures',
      'Don\'t assume systems determine everything'
    ]
  },
  {
    id: 'ma171',
    question_id: 'q171',
    arguments_for: [
      {
        title: 'Disproportional outcomes',
        explanation: 'FPTP produces governments without majority popular support. 2024: Labour won 63% seats on 34% votes. Many voters\' choices not reflected.'
      },
      {
        title: 'Safe seats',
        explanation: 'Most constituencies predictable. Campaigns focus on marginals. Majority of voters in safe seats have limited influence.'
      },
      {
        title: 'Wasted votes',
        explanation: 'Votes for losing candidates don\'t count. Third party voters particularly wasted. Discourages participation.'
      },
      {
        title: 'Unequal constituency sizes',
        explanation: 'Constituencies vary in population. Some votes worth more than others. Boundary changes politicised.'
      }
    ],
    arguments_against: [
      {
        title: 'Universal suffrage',
        explanation: 'All adult citizens can vote. Free and fair elections. Basic democratic requirements met. Elections are legitimate.'
      },
      {
        title: 'Clear mandate',
        explanation: 'FPTP produces strong governments with clear mandate. Voters know what they\'re voting for. Democratic accountability clear.'
      },
      {
        title: 'Constituency representation',
        explanation: 'Every area has MP representing local interests. Geographic representation valuable. Link between representative and represented.'
      },
      {
        title: 'Peaceful transfer of power',
        explanation: 'Elections determine who governs. Results accepted, power transfers peacefully. Core democratic function works.'
      }
    ],
    synoptic_links: [
      'Link to theories of democracy',
      'Connect to representation debate',
      'Compare with PR systems'
    ],
    examples: [
      {
        title: '2024 election',
        context: 'Labour won massive majority on 34% of votes. Democratic? Clear mandate? Shows tension in evaluating democracy.'
      },
      {
        title: 'Safe seats',
        context: 'Many MPs effectively chosen by party selection, not general election. Reduces democratic choice for many voters.'
      }
    ],
    pitfalls: [
      'Define what "fully democratic" means',
      'Consider different aspects of democracy',
      'Don\'t assume PR is automatically more democratic'
    ]
  },
  {
    id: 'ma172',
    question_id: 'q172',
    arguments_for: [
      {
        title: 'Scottish Parliament representation',
        explanation: 'AMS produces more proportional outcomes. Multiple parties in government. Greens have influence. Better representation than Westminster.'
      },
      {
        title: 'Northern Ireland power-sharing',
        explanation: 'STV ensures cross-community representation. DUP and Sinn Féin must share power. System designed for divided society works.'
      },
      {
        title: 'Voter choice enhanced',
        explanation: 'PR systems give voters more meaningful choice. Can vote for smaller parties without wasting vote. STV allows preference ranking.'
      },
      {
        title: 'Higher legitimacy',
        explanation: 'Governments reflect voter preferences more accurately. Scottish Parliament outcomes closer to vote shares. Greater democratic legitimacy.'
      }
    ],
    arguments_against: [
      {
        title: 'FPTP delivers stable government',
        explanation: 'Westminster elections produce clear winners. Strong, accountable governments. Coalitions are exception. Stability valuable.'
      },
      {
        title: 'Constituency link',
        explanation: 'FPTP ensures every voter has specific MP. Local representation clear. PR systems weaken geographic link.'
      },
      {
        title: 'Extremist exclusion',
        explanation: 'FPTP keeps extremist parties out of Westminster. BNP won European Parliament seats under PR, no Westminster seats. FPTP is barrier to extremism.'
      },
      {
        title: 'Voter understanding',
        explanation: 'FPTP simple to understand. AMS, STV complex. Voter confusion with some PR systems. Simplicity is democratic value.'
      }
    ],
    synoptic_links: [
      'Link to electoral system theory',
      'Connect to representation debate',
      'Compare UK systems'
    ],
    examples: [
      {
        title: 'Scottish Government',
        context: 'AMS produced minority and coalition governments requiring negotiation. Some see as weakness; others see as consensus-building.'
      },
      {
        title: '2024 general election',
        context: 'FPTP gave Labour huge majority on small vote share. Shows distortion but also clear mandate.'
      }
    ],
    pitfalls: [
      'Define success criteria',
      'Compare like with like',
      'Consider both representation and governance'
    ]
  },
  {
    id: 'ma173',
    question_id: 'q173',
    arguments_for: [
      {
        title: 'More representative outcomes',
        explanation: 'PR would translate votes into seats more fairly. 2024: Labour\'s 34% would give 34% seats, not 63%. Every vote would count equally.'
      },
      {
        title: 'End wasted votes',
        explanation: 'Under PR, votes for smaller parties would count. Green, Liberal Democrat, Reform UK voters would have representation. No more tactical voting.'
      },
      {
        title: 'End safe seats',
        explanation: 'PR systems mean all votes count wherever cast. Campaigns would be national. Every voter\'s preference matters.'
      },
      {
        title: 'Works elsewhere',
        explanation: 'Germany, New Zealand, Scotland use PR successfully. Coalition governments function. PR is proven system.'
      }
    ],
    arguments_against: [
      {
        title: 'Weak coalition government',
        explanation: 'PR produces coalitions with unclear mandates. Post-election deals decide government. Voters don\'t choose who governs.'
      },
      {
        title: 'Loss of constituency link',
        explanation: 'FPTP ensures local representation. PR systems weaken MP-constituency relationship. Local accountability lost.'
      },
      {
        title: 'Small parties hold balance',
        explanation: 'Kingmaker parties may extract disproportionate influence. Tail wags dog. Democratic mandate distorted.'
      },
      {
        title: 'Referendum rejected change',
        explanation: '2011 AV referendum: 68% voted No. Public rejected change from FPTP. Democratic mandate for current system.'
      }
    ],
    synoptic_links: [
      'Link to Jenkins Commission',
      'Connect to international comparisons',
      'Compare with devolved systems'
    ],
    examples: [
      {
        title: 'Germany',
        context: 'Uses MMP (similar to AMS). Coalition governments the norm. Stable democracy. Shows PR can work for large country.'
      },
      {
        title: '2011 AV referendum',
        context: 'Alternative Vote rejected 68-32. But AV isn\'t proportional. May not indicate opposition to all reform.'
      }
    ],
    pitfalls: [
      'Specify which PR system being discussed',
      'Consider implementation challenges',
      'Reference specific proposals'
    ]
  },
  // UK Politics - Voting Behaviour
  {
    id: 'ma174',
    question_id: 'q174',
    arguments_for: [
      {
        title: '1997 Conservative collapse',
        explanation: 'Sleaze, Black Wednesday, divisions destroyed Conservative support. Blair benefited from Conservative failures more than Labour achievements.'
      },
      {
        title: '2024 Conservative collapse',
        explanation: 'Partygate, economic mismanagement, Truss chaos. Labour won on Conservative failure more than enthusiasm for Starmer.'
      },
      {
        title: 'Economic crises punish incumbents',
        explanation: 'Governments blamed for economic problems. 1979 Winter of Discontent, 2010 financial crisis. Bad economy means government loses.'
      },
      {
        title: 'Anti-incumbent voting',
        explanation: 'Voters often reject government rather than embrace opposition. Negative partisanship - voting against rather than for.'
      }
    ],
    arguments_against: [
      {
        title: '1997 New Labour appeal',
        explanation: 'Blair modernised Labour, made it electable. Positive case for change. Labour offered something, not just alternative to Conservatives.'
      },
      {
        title: '2019 Conservative success',
        explanation: '"Get Brexit Done" was positive message. Johnson\'s personality appeal. Conservatives won, not just Labour lost.'
      },
      {
        title: 'Leadership matters',
        explanation: 'Popular leaders can win elections. Thatcher, Blair had personal appeal. Winners not just beneficiaries of opponent weakness.'
      },
      {
        title: 'Policy proposals attract support',
        explanation: 'Manifestos offer positive vision. NHS investment, tax policies, social programmes attract voters. Elections about choice.'
      }
    ],
    synoptic_links: [
      'Link to valence politics',
      'Connect to leadership studies',
      'Compare different election outcomes'
    ],
    examples: [
      {
        title: '1997 election',
        context: 'Conservative government exhausted by sleaze and divisions. But Blair offered modernised Labour with positive agenda. Both factors mattered.'
      },
      {
        title: '2019 election',
        context: 'Corbyn unpopular, but Johnson also had positive appeal. "Get Brexit Done" was clear message. Winner not just beneficiary.'
      }
    ],
    pitfalls: [
      'Consider both government failure and opposition success',
      'Reference specific elections',
      'Avoid binary analysis'
    ]
  },
  {
    id: 'ma175',
    question_id: 'q175',
    arguments_for: [
      {
        title: 'Class voting historically strong',
        explanation: 'Traditional alignment: working class voted Labour, middle class Conservative. Class predicted voting behaviour for decades.'
      },
      {
        title: 'Age is new class',
        explanation: 'Age now strongest predictor of vote. Young vote Labour, old vote Conservative. 2017, 2019 showed stark age divide. Social factor determines vote.'
      },
      {
        title: 'Education predicts voting',
        explanation: 'Graduate/non-graduate divide now significant. Higher education correlates with Labour, Remain voting. Social background matters.'
      },
      {
        title: 'Regional patterns',
        explanation: 'North-South divide, urban-rural divide shape voting. Red Wall collapse showed regional social factors. Geography as social factor.'
      }
    ],
    arguments_against: [
      {
        title: 'Class dealignment',
        explanation: 'Class voting declined since 1970s. Working class Conservatives, middle class Labour now common. Class no longer determines vote.'
      },
      {
        title: 'Short-term factors matter more',
        explanation: 'Leaders, campaigns, economic competence, issues determine elections. Social factors are background; campaigns decide outcomes.'
      },
      {
        title: 'Partisan dealignment',
        explanation: 'Voters no longer identify strongly with parties. Volatility increased. Social identity less tied to party identity.'
      },
      {
        title: 'Issues trump demographics',
        explanation: 'Brexit cut across class and age. NHS, immigration, economy determine votes. Issues not just social background.'
      }
    ],
    synoptic_links: [
      'Link to class dealignment thesis',
      'Connect to electoral behaviour theories',
      'Compare different elections'
    ],
    examples: [
      {
        title: '2019 Red Wall',
        context: 'Traditional Labour working-class seats went Conservative. Class dealignment visible. But age divide also stark - social factors complicated.'
      },
      {
        title: '2017 Corbyn surge',
        context: 'Youth turnout increased for Corbyn. Age factor evident. But also issues - tuition fees, housing. Multiple factors interacted.'
      }
    ],
    pitfalls: [
      'Distinguish different social factors',
      'Consider interaction between factors',
      'Don\'t overstate single factor\'s importance'
    ]
  },
  {
    id: 'ma176',
    question_id: 'q176',
    arguments_for: [
      {
        title: 'Partisan dealignment',
        explanation: 'Voters no longer strongly identify with parties. Switching between parties more common. Loyalty has declined.'
      },
      {
        title: 'Red Wall collapse 2019',
        explanation: 'Traditional Labour seats voted Conservative. Lifetime voting patterns broken. Dramatic volatility.'
      },
      {
        title: '2017 Corbyn surge',
        explanation: 'Labour gained vote share dramatically during campaign. Polls shifted significantly. Campaign effects showing volatility.'
      },
      {
        title: 'Third party rises',
        explanation: 'UKIP surge 2015, SNP landslide 2015, Reform UK 2024. Support shifts to new parties rapidly. Party system less stable.'
      }
    ],
    arguments_against: [
      {
        title: 'Two-party dominance remains',
        explanation: '2024: Labour and Conservative combined 57% vote. Still dominate. Volatility within two-party structure.'
      },
      {
        title: 'Safe seats persist',
        explanation: 'Many constituencies still predictable. Middle-class south still Conservative (mostly). Working-class north returning to Labour.'
      },
      {
        title: 'Age patterns stable',
        explanation: 'Young vote Labour, old vote Conservative consistently. This pattern stable across recent elections. Not all volatile.'
      },
      {
        title: 'Volatility overstated',
        explanation: 'Brexit was exceptional realignment issue. Normal elections may show less volatility. Brexit distorts picture.'
      }
    ],
    synoptic_links: [
      'Link to dealignment thesis',
      'Connect to electoral change theories',
      'Compare different elections'
    ],
    examples: [
      {
        title: '2019 Red Wall',
        context: 'Lifetime Labour voters switched to Conservative. Unprecedented volatility in these seats. But also specific to Brexit context.'
      },
      {
        title: '2024 election',
        context: 'Some Red Wall seats returned to Labour. Shows volatility continues. But also suggests pattern may not be permanent.'
      }
    ],
    pitfalls: [
      'Define volatility clearly',
      'Consider national vs local patterns',
      'Distinguish Brexit-related change from general trends'
    ]
  },
  {
    id: 'ma177',
    question_id: 'q177',
    arguments_for: [
      {
        title: 'Economic voting theory',
        explanation: 'Voters reward or punish governments on economic performance. "It\'s the economy, stupid." Economic competence is key valence issue.'
      },
      {
        title: '1992 Conservative victory',
        explanation: 'Despite recession, Conservatives trusted more on economy than Labour. Economic credibility won election.'
      },
      {
        title: '2010 financial crisis',
        explanation: 'Labour blamed for financial crisis (unfairly). Economic competence perception shifted to Conservatives. Economy drove result.'
      },
      {
        title: 'Cost of living 2024',
        explanation: 'Economic mismanagement under Conservatives - inflation, mortgage rises. Economic failure drove Conservative defeat.'
      }
    ],
    arguments_against: [
      {
        title: 'Brexit dominated 2019',
        explanation: '"Get Brexit Done" was key message. Constitutional issue trumped economic concerns. Brexit defied economic voting.'
      },
      {
        title: 'Leadership matters',
        explanation: 'Thatcher, Blair, Johnson won on personal appeal. Leadership is separate valence issue. Economy is one factor among several.'
      },
      {
        title: 'Values and identity',
        explanation: 'Culture war issues, identity politics increasingly important. Not just economic self-interest. Values shape votes.'
      },
      {
        title: 'NHS can override economy',
        explanation: 'Health service funding consistently top issue. 2017 Labour surge partly NHS. Social issues compete with economy.'
      }
    ],
    synoptic_links: [
      'Link to valence politics',
      'Connect to economic voting theory',
      'Compare different elections'
    ],
    examples: [
      {
        title: '2019 election',
        context: 'Brexit dominated despite economic uncertainty. Shows non-economic issues can override. But Conservatives also led on economic competence.'
      },
      {
        title: 'Truss economic crisis',
        context: 'Mini-budget disaster destroyed Conservative economic credibility. Major factor in 2024 defeat. Shows economy matters when badly handled.'
      }
    ],
    pitfalls: [
      'Consider multiple factors in each election',
      'Define economic competence carefully',
      'Don\'t reduce elections to single factor'
    ]
  },
  // Political Ideas - Liberalism
  {
    id: 'ma178',
    question_id: 'q178',
    arguments_for: [
      {
        title: 'Both accept constitutional state',
        explanation: 'Locke and Rawls both support limited government, rule of law, separation of powers. State must be constrained by constitution. Shared foundation.'
      },
      {
        title: 'Protection of rights',
        explanation: 'Both classical and modern liberals see state as protecting individual rights. Mill\'s harm principle, Rawls\'s equal basic liberties. Rights protection shared.'
      },
      {
        title: 'Consent and legitimacy',
        explanation: 'Both strands ground state legitimacy in consent. Locke\'s social contract, democratic governance. State serves individuals, not vice versa.'
      },
      {
        title: 'Rejection of arbitrary power',
        explanation: 'All liberals oppose tyranny and arbitrary government. State power must be limited and accountable. Core liberal agreement.'
      }
    ],
    arguments_against: [
      {
        title: 'Minimal vs enabling state',
        explanation: 'Locke\'s night-watchman state vs Rawls\'s redistributive state. Classical liberals want minimal intervention; modern liberals want positive action.'
      },
      {
        title: 'Economic role differs',
        explanation: 'Classical liberals favour laissez-faire; modern liberals accept Keynesian management. State role in economy fundamentally disputed.'
      },
      {
        title: 'Negative vs positive freedom',
        explanation: 'Classical liberals focus on freedom from interference. Modern liberals add freedom to achieve. Different state roles follow from different freedom concepts.'
      },
      {
        title: 'Social justice divide',
        explanation: 'Rawls\'s difference principle requires redistribution. Classical liberals reject this as illegitimate state action. Fundamental disagreement.'
      }
    ],
    synoptic_links: [
      'Compare with conservative state views',
      'Link to socialist enabling state',
      'Connect to anarchist rejection of state'
    ],
    examples: [
      {
        title: 'Locke\'s limited government',
        context: 'State exists only to protect life, liberty, property. Night-watchman role. Classical liberal minimal state.'
      },
      {
        title: 'Rawls\'s difference principle',
        context: 'State should arrange inequalities to benefit least advantaged. Requires active redistribution. Modern liberal enabling state.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Define different state roles clearly',
      'Consider both agreement and disagreement'
    ]
  },
  {
    id: 'ma179',
    question_id: 'q179',
    arguments_for: [
      {
        title: 'Individualism shared',
        explanation: 'Both classical and modern liberals are individualist. Locke\'s natural rights, Mill\'s individuality, Rawls\'s individuals in original position. Individual is primary.'
      },
      {
        title: 'Reason and progress',
        explanation: 'All liberals believe in human rationality and capacity for progress. Enlightenment optimism persists. Shared philosophical foundation.'
      },
      {
        title: 'Constitutional government',
        explanation: 'Both accept rule of law, limited government, protection of rights. Locke\'s constitutionalism influences all liberals. Shared institutional preferences.'
      },
      {
        title: 'Tolerance valued',
        explanation: 'Mill\'s tolerance of diverse lifestyles accepted by modern liberals. Rawls\'s reasonable pluralism continues this. Tolerance unites strands.'
      }
    ],
    arguments_against: [
      {
        title: 'State role transformed',
        explanation: 'Modern liberals accept much larger state than classical liberals would tolerate. Welfare state, regulation, redistribution. Fundamental change.'
      },
      {
        title: 'Positive liberty added',
        explanation: 'Modern liberals add positive freedom to classical negative freedom. State must enable, not just protect. Different freedom concept changes everything.'
      },
      {
        title: 'Social justice emphasis',
        explanation: 'Rawls prioritises social justice. Classical liberals prioritise individual liberty. Modern liberals add equality concerns classical liberals lack.'
      },
      {
        title: 'Economic intervention',
        explanation: 'Modern liberals accept Keynesian economics, market regulation. Classical liberals want laissez-faire. Economic policy fundamentally different.'
      }
    ],
    synoptic_links: [
      'Compare liberal strands',
      'Link to development of liberal thought',
      'Connect to political context of each era'
    ],
    examples: [
      {
        title: 'Mill bridges strands',
        context: 'Mill\'s developmental individualism moves beyond pure negative freedom. Shows evolution within liberal tradition. Bridge figure.'
      },
      {
        title: 'Rawls transforms liberalism',
        context: 'Theory of Justice made social justice central to liberalism. Difference principle requires redistribution. Major development of liberal thought.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Show evolution of ideas',
      'Consider what "accept" means - adopt, modify, reject?'
    ]
  },
  {
    id: 'ma180',
    question_id: 'q180',
    arguments_for: [
      {
        title: 'Tolerance central',
        explanation: 'Mill\'s On Liberty focuses on social tolerance. Experiments in living, diverse lifestyles. Social not economic concern.'
      },
      {
        title: 'Individual development',
        explanation: 'Mill\'s developmental individualism emphasises self-realisation. Personal growth, education, culture. Social more than material.'
      },
      {
        title: 'Feminism within liberalism',
        explanation: 'Wollstonecraft and Friedan focused on social position of women. Gender equality is social issue. Central to liberal tradition.'
      },
      {
        title: 'Rawls on basic liberties',
        explanation: 'First principle of justice concerns equal basic liberties. Political and civil rights prioritised over economic arrangements.'
      }
    ],
    arguments_against: [
      {
        title: 'Classical liberal economics',
        explanation: 'Locke\'s defence of property, Adam Smith\'s invisible hand. Economics central to classical liberalism. Free market is core commitment.'
      },
      {
        title: 'Modern liberal economics',
        explanation: 'Rawls\'s difference principle, Keynes\'s managed capitalism. Modern liberals also deeply concerned with economic arrangements.'
      },
      {
        title: 'Property as liberty',
        explanation: 'For Locke, property is natural right. Economic freedom is liberty. Economy and society not separate.'
      },
      {
        title: 'Social justice has economic dimension',
        explanation: 'Rawls\'s justice concerns distribution of primary goods. Economic equality part of social justice. Economy is social concern.'
      }
    ],
    synoptic_links: [
      'Compare with socialist economic focus',
      'Link to conservative organic society',
      'Connect to different liberal priorities'
    ],
    examples: [
      {
        title: 'Mill\'s On Liberty',
        context: 'Primarily concerned with social freedom - thought, expression, lifestyle. Economic freedom less central to argument.'
      },
      {
        title: 'Friedan\'s Feminine Mystique',
        context: 'Focused on women\'s social position and identity. Economic independence important but as means to self-realisation.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Define society and economy carefully',
      'Consider different liberal priorities'
    ]
  },
  {
    id: 'ma181',
    question_id: 'q181',
    arguments_for: [
      {
        title: 'Classical liberal suspicion',
        explanation: 'Locke saw state as potential threat to natural rights. Limited government to prevent tyranny. State must be constrained.'
      },
      {
        title: 'Mill\'s tyranny of majority',
        explanation: 'Mill feared democratic state could oppress minorities. State power threatening even when democratic. Liberal vigilance required.'
      },
      {
        title: 'State as necessary evil',
        explanation: 'Classical liberals accept state reluctantly. Necessary for order but inherently dangerous. Minimal state preferable.'
      },
      {
        title: 'Rights limit state',
        explanation: 'Individual rights constrain state action. Constitutional limits, rule of law, separation of powers. All designed to check state power.'
      }
    ],
    arguments_against: [
      {
        title: 'Modern liberals trust state',
        explanation: 'Rawls\'s state can be instrument of justice. Democratic state serves citizens. State is potentially benign.'
      },
      {
        title: 'Enabling state positive',
        explanation: 'Modern liberals see state as enabling individual development. Welfare, education, healthcare enhance freedom. State liberates.'
      },
      {
        title: 'State protects rights',
        explanation: 'Without state enforcement, rights are empty. State is guardian of liberty. Fear should be of no state, not too much state.'
      },
      {
        title: 'Friedan wanted state action',
        explanation: 'Liberal feminists sought state legislation for equality. Equal pay, anti-discrimination law. State as instrument of liberation.'
      }
    ],
    synoptic_links: [
      'Compare with anarchist rejection of state',
      'Link to conservative organic state',
      'Connect to socialist view of state'
    ],
    examples: [
      {
        title: 'Locke\'s right to revolution',
        context: 'People may overthrow state that violates rights. Shows liberal fear of tyrannical state. Rights trump state authority.'
      },
      {
        title: 'Rawls\'s welfare state',
        context: 'State implements difference principle, ensures fair equality of opportunity. Modern liberal positive view of state.'
      }
    ],
    pitfalls: [
      'Distinguish classical and modern liberal views',
      'Use specification thinkers',
      'Consider what "fear" means'
    ]
  },
  {
    id: 'ma182',
    question_id: 'q182',
    arguments_for: [
      {
        title: 'All support market economy',
        explanation: 'No liberal advocates abolishing markets. Locke\'s property rights, Mill\'s economic liberty, Rawls\'s market system. Markets accepted.'
      },
      {
        title: 'Private property defended',
        explanation: 'Locke saw property as natural right. Even Rawls accepts private property. Property fundamental to all liberals.'
      },
      {
        title: 'Rejection of command economy',
        explanation: 'All liberals reject socialist central planning. Market mechanisms preferred. Agreement on what economy should not be.'
      },
      {
        title: 'Economic liberty valued',
        explanation: 'Freedom to work, trade, own. Economic freedom part of individual liberty. All liberals accept this.'
      }
    ],
    arguments_against: [
      {
        title: 'Laissez-faire vs intervention',
        explanation: 'Locke and classical liberals want minimal state in economy. Rawls accepts significant regulation and redistribution. Major disagreement.'
      },
      {
        title: 'Keynesian vs free market',
        explanation: 'Modern liberals accept Keynesian management. Classical liberals want market to self-regulate. Economic policy differs.'
      },
      {
        title: 'Redistribution disputed',
        explanation: 'Rawls\'s difference principle requires redistribution. Classical liberals see taxation as near-theft. Fundamental disagreement.'
      },
      {
        title: 'Welfare state divide',
        explanation: 'Modern liberals accept welfare state. Classical liberals see it as dependency-creating. State economic role disputed.'
      }
    ],
    synoptic_links: [
      'Compare with socialist economics',
      'Link to conservative economic views',
      'Connect to debates about capitalism'
    ],
    examples: [
      {
        title: 'Locke on property',
        context: 'Property acquired through labour is natural right. State exists to protect it. Minimal economic role for state.'
      },
      {
        title: 'Rawls\'s difference principle',
        context: 'Economic inequalities justified only if they benefit least advantaged. Significant redistribution required. Active state role.'
      }
    ],
    pitfalls: [
      'Distinguish classical and modern liberal economics',
      'Use specification thinkers',
      'Define agreement carefully - on what exactly?'
    ]
  },
  {
    id: 'ma183',
    question_id: 'q183',
    arguments_for: [
      {
        title: 'Rationality shared',
        explanation: 'All liberals see humans as rational. Locke\'s reasoning individuals, Mill\'s rational self-improvement, Rawls\'s reasonable persons. Reason central.'
      },
      {
        title: 'Moral equality',
        explanation: 'All liberals affirm equal moral worth. Foundational equality underpins rights. Wollstonecraft, Mill, Rawls share this.'
      },
      {
        title: 'Capacity for improvement',
        explanation: 'Liberals optimistic about human potential. Mill\'s developmental individualism, Rawls\'s just society. Progress possible.'
      },
      {
        title: 'Individualism shared',
        explanation: 'All liberals are methodological individualists. Society is collection of individuals. Individual is primary unit.'
      }
    ],
    arguments_against: [
      {
        title: 'Egotistical vs developmental',
        explanation: 'Classical liberals see humans as self-interested. Mill emphasises higher pleasures and development. Different emphasis on human motivation.'
      },
      {
        title: 'Atomism vs social being',
        explanation: 'Some liberals more atomistic; Rawls recognises social dimension of individual identity. Different views on how social humans are.'
      },
      {
        title: 'Natural rights vs social construction',
        explanation: 'Locke sees rights as natural, pre-political. Others see them as social agreements. Different foundations.'
      },
      {
        title: 'Human imperfection recognised',
        explanation: 'Mill recognised tyranny of majority, human fallibility. Not purely optimistic. Shades of pessimism exist.'
      }
    ],
    synoptic_links: [
      'Compare with conservative pessimism',
      'Link to socialist malleable human nature',
      'Connect to feminist views on gender and nature'
    ],
    examples: [
      {
        title: 'Locke\'s tabula rasa',
        context: 'Humans born as blank slate, formed by experience. Rational but shaped by environment. Enlightenment optimism.'
      },
      {
        title: 'Mill\'s higher pleasures',
        context: 'Humans capable of intellectual and moral development beyond mere pleasure-seeking. Optimistic about human potential.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Define human nature carefully',
      'Consider both agreement and nuance'
    ]
  },
  {
    id: 'ma184',
    question_id: 'q184',
    arguments_for: [
      {
        title: 'Classical liberal tension',
        explanation: 'Locke\'s natural liberty may conflict with equality. Economic freedom produces inequality. Liberty and equality in tension.'
      },
      {
        title: 'Mill recognised tension',
        explanation: 'Liberty may produce outcomes that inequality critics reject. Free development may lead to unequal outcomes. Tension acknowledged.'
      },
      {
        title: 'Redistribution limits liberty',
        explanation: 'Rawlsian redistribution requires taxation - limiting property rights, economic freedom. More equality may mean less liberty.'
      },
      {
        title: 'Positive liberty has costs',
        explanation: 'Enabling everyone requires constraining some. Universal education, healthcare require taxation. Freedom to do X may limit freedom from interference.'
      }
    ],
    arguments_against: [
      {
        title: 'Rawls resolves tension',
        explanation: 'Rawls\'s first principle (equal basic liberties) prioritised over second (difference principle). Liberty and equality reconciled through priority rules.'
      },
      {
        title: 'Formal equality complements liberty',
        explanation: 'Equal rights, equal before law. This equality enables liberty. No tension in foundational equality.'
      },
      {
        title: 'Positive freedom requires equality',
        explanation: 'Without resources, liberty is empty. Equality of opportunity enables meaningful freedom. Equality serves liberty.'
      },
      {
        title: 'Wollstonecraft on women\'s equality',
        explanation: 'Women\'s equality enhances, not limits, liberty. Equality and liberty reinforce each other for Wollstonecraft.'
      }
    ],
    synoptic_links: [
      'Compare with socialist emphasis on equality',
      'Link to conservative acceptance of inequality',
      'Connect to different freedom concepts'
    ],
    examples: [
      {
        title: 'Rawls\'s lexical priority',
        context: 'Basic liberties cannot be traded for economic equality. Liberty has priority. But difference principle still requires redistribution.'
      },
      {
        title: 'Wollstonecraft on women',
        context: 'Equal education and rights for women would enhance everyone\'s liberty. Equality and freedom complementary.'
      }
    ],
    pitfalls: [
      'Define liberty and equality precisely',
      'Use specification thinkers',
      'Consider how tension might be resolved'
    ]
  },
  // Political Ideas - Conservatism
  {
    id: 'ma185',
    question_id: 'q185',
    arguments_for: [
      {
        title: 'Organic society shared',
        explanation: 'Burke and traditional conservatives see society as organic whole. Not collection of atomistic individuals. Social bonds natural and valuable.'
      },
      {
        title: 'Hierarchy accepted',
        explanation: 'All conservatives accept some hierarchy as natural. Burke\'s natural aristocracy, Oakeshott\'s tradition. Leadership by capable accepted.'
      },
      {
        title: 'Tradition valued',
        explanation: 'All conservatives value inherited customs and institutions. Burke\'s accumulated wisdom, Oakeshott\'s tacit knowledge. Tradition unites.'
      },
      {
        title: 'Little platoons',
        explanation: 'Burke\'s intermediate institutions - family, church, local community. All conservatives value these social bonds. Shared emphasis.'
      }
    ],
    arguments_against: [
      {
        title: 'New Right atomism',
        explanation: 'Rand\'s individualism, Nozick\'s self-ownership reject organic society. Thatcher: "no such thing as society." Atomistic vs organic divide.'
      },
      {
        title: 'Meritocracy vs hierarchy',
        explanation: 'New Right emphasises meritocracy - earned position. Traditional conservatives accept inherited hierarchy. Different bases for social order.'
      },
      {
        title: 'Market disrupts community',
        explanation: 'Free market economics (New Right) disrupts traditional communities and institutions. Creative destruction vs organic preservation.'
      },
      {
        title: 'Individualism vs collectivism',
        explanation: 'New Right prioritises individual over community. Traditional conservatives see individuals as embedded in social context. Fundamental disagreement.'
      }
    ],
    synoptic_links: [
      'Compare with liberal individualism',
      'Link to socialist class society',
      'Connect to nationalist organic nation'
    ],
    examples: [
      {
        title: 'Burke\'s little platoons',
        context: 'Individuals find meaning in family, church, local community. Society is organic whole of intermediate institutions.'
      },
      {
        title: 'Thatcher\'s individualism',
        context: '"There is no such thing as society, only individuals and families." Challenges organic conservative view. New Right atomism.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Compare One Nation and New Right',
      'Define "society" for different conservatives'
    ]
  },
  {
    id: 'ma186',
    question_id: 'q186',
    arguments_for: [
      {
        title: 'Both accept capitalism',
        explanation: 'One Nation and New Right both support market economy. Private property, free enterprise. Agreement on economic system.'
      },
      {
        title: 'Social order valued',
        explanation: 'Both strands want stable, ordered society. Law and order, respect for institutions. Shared conservative instinct.'
      },
      {
        title: 'Pragmatism on policy',
        explanation: 'Oakeshott\'s politics of scepticism accepted by both. What works matters. Pragmatic approach shared.'
      },
      {
        title: 'Nation and tradition',
        explanation: 'Both value national identity and inherited traditions. Patriotism, cultural continuity. Shared conservative values.'
      }
    ],
    arguments_against: [
      {
        title: 'State role differs radically',
        explanation: 'One Nation accepts welfare state, paternalist intervention. New Right wants minimal state. Fundamental disagreement on state.'
      },
      {
        title: 'Organic vs atomistic society',
        explanation: 'One Nation sees organic society. New Right (Rand, Nozick) emphasises individuals. Different social philosophies.'
      },
      {
        title: 'Noblesse oblige vs self-reliance',
        explanation: 'One Nation: privileged have duty to help less fortunate. New Right: individuals responsible for themselves. Opposite ethics.'
      },
      {
        title: 'Economic management',
        explanation: 'One Nation accepts Keynesian management. New Right demands free markets. Economic policy fundamentally different.'
      }
    ],
    synoptic_links: [
      'Compare with liberal state debate',
      'Link to socialist welfare state',
      'Connect to different conservative traditions'
    ],
    examples: [
      {
        title: 'Disraeli\'s One Nation',
        context: 'Social reform to prevent "two nations" - rich and poor. Paternalist conservatism. State has social role.'
      },
      {
        title: 'Thatcher\'s New Right',
        context: 'Rolling back state, privatisation, individual responsibility. Rejection of One Nation paternalism.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Define what unites and divides',
      'Consider specific policy areas'
    ]
  },
  {
    id: 'ma187',
    question_id: 'q187',
    arguments_for: [
      {
        title: 'All accept state necessity',
        explanation: 'Hobbes on order, Burke on inherited institutions. Conservatives accept need for state. Unlike anarchists, no conservative abolishes state.'
      },
      {
        title: 'Law and order priority',
        explanation: 'All conservatives emphasise state role in maintaining order. Strong defence, criminal justice. State protects social order.'
      },
      {
        title: 'Constitutional continuity',
        explanation: 'Burke\'s respect for inherited institutions. Conservatives value established state structures. Continuity shared.'
      },
      {
        title: 'Authority valued',
        explanation: 'All conservatives accept legitimate authority. State exercises authority for common good. Respect for authority shared.'
      }
    ],
    arguments_against: [
      {
        title: 'Paternalist vs minimal state',
        explanation: 'One Nation accepts welfare state, intervention. New Right (Nozick) wants minimal state. Radically different state roles.'
      },
      {
        title: 'Hobbes vs Burke',
        explanation: 'Hobbes wants strong sovereign. Burke values limited, constitutional state. Different state traditions within conservatism.'
      },
      {
        title: 'Economic role disputed',
        explanation: 'One Nation accepts economic management. Rand and Nozick demand laissez-faire. State economic role contested.'
      },
      {
        title: 'Social services divide',
        explanation: 'One Nation accepts NHS, welfare. New Right would reduce or privatise. State provision disputed.'
      }
    ],
    synoptic_links: [
      'Compare with liberal minimal state',
      'Link to socialist state role',
      'Connect to anarchist anti-statism'
    ],
    examples: [
      {
        title: 'Hobbes\'s Leviathan',
        context: 'Strong sovereign needed to prevent chaos. State authority essential. But focused on order not welfare.'
      },
      {
        title: 'Nozick\'s minimal state',
        context: 'State limited to protection against force and fraud. Night-watchman state. Rejects One Nation paternalism.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Distinguish different conservative state conceptions',
      'Consider both economic and social state roles'
    ]
  },
  {
    id: 'ma188',
    question_id: 'q188',
    arguments_for: [
      {
        title: 'Traditional pessimism',
        explanation: 'Hobbes saw humans as selfish, competitive. Burke emphasised human imperfection, need for restraint. Pessimistic view unites traditional conservatives.'
      },
      {
        title: 'Need for order',
        explanation: 'All conservatives accept humans need authority and order. Without institutions, chaos. Shared belief in human limitation.'
      },
      {
        title: 'Oakeshott\'s scepticism',
        explanation: 'Humans cannot rationally plan society. Limited knowledge, bounded rationality. Conservative scepticism about human capacity.'
      },
      {
        title: 'Original sin tradition',
        explanation: 'Religious conservatives see human moral imperfection. Fallen nature requires redemption. Pessimistic foundation.'
      }
    ],
    arguments_against: [
      {
        title: 'New Right optimism',
        explanation: 'Rand\'s heroic individuals achieve greatness through reason. Rational self-interest produces good outcomes. More optimistic view.'
      },
      {
        title: 'Market rationality',
        explanation: 'New Right trusts individuals to make rational choices in market. Invisible hand coordinates. Optimistic about human economic rationality.'
      },
      {
        title: 'Meritocracy assumes capacity',
        explanation: 'New Right belief in meritocracy assumes individuals can achieve through effort. More optimistic about individual potential.'
      },
      {
        title: 'Self-reliance possible',
        explanation: 'New Right believes individuals can and should be self-reliant. Optimistic about human independence and capability.'
      }
    ],
    synoptic_links: [
      'Compare with liberal optimism',
      'Link to socialist malleable human nature',
      'Connect to religious views of human nature'
    ],
    examples: [
      {
        title: 'Hobbes\'s state of nature',
        context: 'Without government, life "solitary, poor, nasty, brutish and short." Deeply pessimistic about unrestrained human nature.'
      },
      {
        title: 'Rand\'s Howard Roark',
        context: 'Heroic individual achieving through reason and integrity. Optimistic about human potential. Different from Hobbesian pessimism.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Distinguish traditional and New Right views',
      'Define what "human nature" means for conservatives'
    ]
  },
  {
    id: 'ma189',
    question_id: 'q189',
    arguments_for: [
      {
        title: 'All support private property',
        explanation: 'Burke, Oakeshott, Nozick, Rand all defend private property. Property is foundation of civilisation. Universal conservative commitment.'
      },
      {
        title: 'All accept capitalism',
        explanation: 'No conservative advocates abolishing market economy. Free enterprise, profit motive accepted. Agreement on economic system.'
      },
      {
        title: 'Opposition to socialism',
        explanation: 'All conservatives reject state ownership, central planning. Anti-socialism unites strands. Common enemy.'
      },
      {
        title: 'Wealth creation valued',
        explanation: 'All conservatives see wealth creation as good. Economic prosperity supports social stability. Shared priority.'
      }
    ],
    arguments_against: [
      {
        title: 'Intervention vs laissez-faire',
        explanation: 'One Nation accepts Keynesian management. New Right demands free markets. State economic role fundamentally disputed.'
      },
      {
        title: 'Welfare state divide',
        explanation: 'One Nation accepts welfare provision. New Right sees it as creating dependency. Major policy disagreement.'
      },
      {
        title: 'Redistribution views differ',
        explanation: 'One Nation accepts some redistribution for social cohesion. New Right (Nozick) sees taxation as illegitimate. Different principles.'
      },
      {
        title: 'Community vs individual',
        explanation: 'One Nation sees economy serving community. New Right prioritises individual economic freedom. Different economic ethics.'
      }
    ],
    synoptic_links: [
      'Compare with liberal economic debate',
      'Link to socialist economic alternative',
      'Connect to conservative traditions'
    ],
    examples: [
      {
        title: 'Macmillan\'s One Nation',
        context: 'Accepted mixed economy, full employment policy, welfare state. Managed capitalism for social stability.'
      },
      {
        title: 'Nozick\'s minimal state',
        context: 'Taxation is forced labour. Only minimal state protecting property rights legitimate. Radical free market position.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Compare specific economic policies',
      'Define agreement carefully'
    ]
  },
  {
    id: 'ma190',
    question_id: 'q190',
    arguments_for: [
      {
        title: 'Burke\'s noblesse oblige',
        explanation: 'Burke saw natural aristocracy as having duty to lead and care for others. Paternalism inherent in traditional conservatism.'
      },
      {
        title: 'One Nation tradition',
        explanation: 'Disraeli\'s social reform aimed to unite two nations. Privileged have responsibility for less fortunate. Paternalism central.'
      },
      {
        title: 'Organic society implies duty',
        explanation: 'If society is organic whole, parts have duties to whole. Wealthy and powerful have obligations. Paternalism follows from organic view.'
      },
      {
        title: 'Historical conservative practice',
        explanation: 'Conservative governments created welfare state elements. NHS, state education. Paternalist policies in practice.'
      }
    ],
    arguments_against: [
      {
        title: 'New Right rejects paternalism',
        explanation: 'Rand\'s individualism, Nozick\'s self-ownership reject paternalism. Individuals responsible for themselves. No duty to care for others.'
      },
      {
        title: 'Self-reliance emphasised',
        explanation: 'New Right sees paternalism as creating dependency. Welfare undermines character. Anti-paternalist strand significant.'
      },
      {
        title: 'Market rewards merit',
        explanation: 'New Right believes market outcomes are just. No need for paternalist correction. Meritocracy not charity.'
      },
      {
        title: 'Thatcherism rejected paternalism',
        explanation: 'Thatcher attacked "nanny state." Rolled back paternalist policies. Major conservative leader against paternalism.'
      }
    ],
    synoptic_links: [
      'Compare with liberal view of state role',
      'Link to socialist welfare state',
      'Connect to different conservative traditions'
    ],
    examples: [
      {
        title: 'Disraeli\'s social reform',
        context: 'Public Health Act, housing reform. Conservative paternalism addressing poverty. Noblesse oblige in practice.'
      },
      {
        title: 'Thatcher\'s welfare cuts',
        context: 'Reduced benefits, promoted self-reliance. Rejected paternalist approach. Shows paternalism not universal in conservatism.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Compare One Nation and New Right on paternalism',
      'Define paternalism carefully'
    ]
  },
  // Political Ideas - Socialism
  {
    id: 'ma191',
    question_id: 'q191',
    arguments_for: [
      {
        title: 'Revolutionary socialism committed',
        explanation: 'Marx\'s communism: "from each according to ability, to each according to need." Equality of outcome through common ownership.'
      },
      {
        title: 'Early socialists emphasised',
        explanation: 'Utopian socialists, Marx, Luxemburg all sought end to class inequality. Real equality of condition, not just opportunity.'
      },
      {
        title: 'Critique of formal equality',
        explanation: 'Socialists criticise liberal equality as merely formal. Real equality requires equal outcomes. Substantive equality.'
      },
      {
        title: 'Webb\'s Fabianism',
        explanation: 'Webb sought comprehensive welfare state reducing inequality. Redistribution to equalise conditions. Outcome-oriented.'
      }
    ],
    arguments_against: [
      {
        title: 'Crosland\'s revisionism',
        explanation: 'Crosland accepted equality of opportunity could be achieved within capitalism. Social democracy doesn\'t require equal outcomes.'
      },
      {
        title: 'Third Way abandonment',
        explanation: 'Blair\'s Third Way prioritised equality of opportunity over outcome. Accepted significant inequality. Major shift.'
      },
      {
        title: 'Meritocracy accepted',
        explanation: 'Some socialists accept unequal rewards for effort and talent. Merit-based inequality legitimate. Not pure equality of outcome.'
      },
      {
        title: 'Practical constraints',
        explanation: 'Social democrats accept some inequality as price of efficiency. Complete equality may undermine incentives. Pragmatic acceptance.'
      }
    ],
    synoptic_links: [
      'Compare with liberal equality of opportunity',
      'Link to conservative acceptance of inequality',
      'Connect to debates about justice'
    ],
    examples: [
      {
        title: 'Marx on communism',
        context: '"From each according to ability, to each according to need." Distribution based on need, not contribution. Equality of outcome.'
      },
      {
        title: 'Blair\'s Third Way',
        context: 'Equality of opportunity, not outcome. Accepted inequality if process fair. Significant departure from traditional socialism.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Distinguish revolutionary and revisionist positions',
      'Define equality of outcome precisely'
    ]
  },
  {
    id: 'ma192',
    question_id: 'q192',
    arguments_for: [
      {
        title: 'Common ownership vs mixed economy',
        explanation: 'Marx demanded common ownership of means of production. Crosland accepted mixed economy. Fundamental disagreement on property.'
      },
      {
        title: 'Planning vs markets',
        explanation: 'Revolutionary socialists favour central planning. Social democrats accept market mechanisms. Different economic coordination.'
      },
      {
        title: 'Revolution vs reform',
        explanation: 'Marx and Luxemburg sought revolutionary transformation. Webb\'s gradualism works within capitalism. Different paths to different economies.'
      },
      {
        title: 'Third Way accepts capitalism',
        explanation: 'Blair accepted market economy. Rejected nationalisation. Fundamentally different from Marxist economics.'
      }
    ],
    arguments_against: [
      {
        title: 'All critique capitalism',
        explanation: 'All socialists identify problems with unregulated capitalism - inequality, exploitation, alienation. Shared critique even if different solutions.'
      },
      {
        title: 'Workers\' interests prioritised',
        explanation: 'All socialists prioritise interests of working people. Labour movement, trade unions, workplace rights. Shared commitment.'
      },
      {
        title: 'Redistribution accepted',
        explanation: 'All socialists support some redistribution. Progressive taxation, welfare provision. Degree differs but principle shared.'
      },
      {
        title: 'Cooperation valued',
        explanation: 'All socialists value cooperation over competition. Whether through state, cooperatives, or regulated markets. Shared value.'
      }
    ],
    synoptic_links: [
      'Compare with liberal market economics',
      'Link to conservative mixed economy acceptance',
      'Connect to different socialist traditions'
    ],
    examples: [
      {
        title: 'Marx\'s communism',
        context: 'Abolition of private property, common ownership of means of production. Planned economy. Revolutionary transformation.'
      },
      {
        title: 'Crosland\'s Future of Socialism',
        context: 'Mixed economy acceptable. Equality achievable through redistribution and public services. Revisionist position.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Compare specific economic positions',
      'Consider both principles and practicalities'
    ]
  },
  {
    id: 'ma193',
    question_id: 'q193',
    arguments_for: [
      {
        title: 'Marx\'s class analysis',
        explanation: 'Historical materialism sees history as class struggle. Bourgeoisie vs proletariat is fundamental social division. Class central to Marxism.'
      },
      {
        title: 'Class consciousness',
        explanation: 'Workers must develop class consciousness to make revolution. Working-class identity and solidarity essential. Class as foundation.'
      },
      {
        title: 'Trade union roots',
        explanation: 'Labour movement grew from trade unions representing working-class interests. Class-based organisation. Class politics foundational.'
      },
      {
        title: 'Exploitation analysis',
        explanation: 'Marx\'s surplus value theory explains exploitation through class relations. Class is mechanism of exploitation. Central to socialist analysis.'
      }
    ],
    arguments_against: [
      {
        title: 'Other identities matter',
        explanation: 'Gender, race, nationality also create oppression. Socialist feminism, anti-racist socialism. Class not only division.'
      },
      {
        title: 'Class dealignment',
        explanation: 'Traditional class voting declined. Working class votes Conservative; middle class votes Labour. Class less determinant.'
      },
      {
        title: 'Third Way beyond class',
        explanation: 'Blair\'s Third Way sought broad coalition beyond class. Big tent politics. Class politics abandoned.'
      },
      {
        title: 'Webb\'s expertise emphasis',
        explanation: 'Fabian socialism emphasised expert administration. Technocratic rather than class approach. Different foundation.'
      }
    ],
    synoptic_links: [
      'Compare with liberal individualism',
      'Link to feminist intersectionality',
      'Connect to nationalist community'
    ],
    examples: [
      {
        title: 'Marx and Engels',
        context: 'Communist Manifesto: "history of all hitherto existing society is the history of class struggles." Class as key to understanding society.'
      },
      {
        title: 'New Labour',
        context: 'Sought middle-class as well as working-class support. Class rhetoric reduced. Broad electoral coalition.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Consider evolution of class politics',
      'Distinguish Marxist and other socialist approaches'
    ]
  },
  {
    id: 'ma194',
    question_id: 'q194',
    arguments_for: [
      {
        title: 'Revolution vs reform',
        explanation: 'Marx and Luxemburg demanded revolution. Webb and Crosland sought gradual reform. Fundamental strategic divide.'
      },
      {
        title: 'Common ownership vs mixed economy',
        explanation: 'Revolutionary socialists want to abolish private property. Social democrats accept mixed economy. Different endpoints.'
      },
      {
        title: 'State role disputed',
        explanation: 'Marx saw state as instrument of class rule to be smashed. Social democrats use state for reform. Different state theories.'
      },
      {
        title: 'Third Way departure',
        explanation: 'Blair accepted market economy, rejected nationalisation, emphasised opportunity not outcome. Major break from socialism.'
      }
    ],
    arguments_against: [
      {
        title: 'Shared values',
        explanation: 'All socialists value equality, community, cooperation. Common humanity, fraternity. Core values shared despite disagreements.'
      },
      {
        title: 'All critique capitalism',
        explanation: 'All socialists identify problems with capitalism - inequality, exploitation. Degree of critique varies but direction shared.'
      },
      {
        title: 'Workers\' interests prioritised',
        explanation: 'All socialists advocate for working people. Labour rights, welfare, redistribution. Shared commitment to workers.'
      },
      {
        title: 'Historical evolution',
        explanation: 'Social democracy evolved from revolutionary socialism. Continuity as well as change. Same tradition, different moments.'
      }
    ],
    synoptic_links: [
      'Compare with other ideologies\' unity/disunity',
      'Link to historical development of socialism',
      'Connect to contemporary socialist debates'
    ],
    examples: [
      {
        title: 'Luxemburg\'s Reform or Revolution',
        context: 'Argued against revisionism. Revolution necessary, reform insufficient. Shows depth of strategic divide.'
      },
      {
        title: 'Crosland\'s Future of Socialism',
        context: 'Accepted capitalism could be reformed. Equality through redistribution. Major revisionist text.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Consider both divisions and commonalities',
      'Define what "united" and "divided" mean'
    ]
  },
  {
    id: 'ma195',
    question_id: 'q195',
    arguments_for: [
      {
        title: 'Accepted capitalism',
        explanation: 'Blair accepted market economy. No nationalisation, no common ownership. Fundamental socialist principle abandoned.'
      },
      {
        title: 'Equality of opportunity not outcome',
        explanation: 'Third Way prioritised opportunity over outcome. Accepted inequality if process fair. Not socialist equality.'
      },
      {
        title: 'Welfare reform',
        explanation: '"Hand up not hand out." Welfare conditionality, workfare. Different from universal provision. Reforming not extending welfare.'
      },
      {
        title: 'Business-friendly',
        explanation: 'New Labour courted business, accepted City influence. Not traditional socialist hostility to capital. Accommodation with capitalism.'
      }
    ],
    arguments_against: [
      {
        title: 'Redistribution continued',
        explanation: 'Tax credits, minimum wage, public investment. Significant redistribution occurred. Socialist goals pursued through new means.'
      },
      {
        title: 'Public services investment',
        explanation: 'NHS, education spending increased substantially. Public provision prioritised. Socialist commitment to public services.'
      },
      {
        title: 'Community emphasis',
        explanation: 'Communitarianism - rights and responsibilities. Community solidarity. Not pure individualism. Social dimension retained.'
      },
      {
        title: 'Pragmatic socialism',
        explanation: 'Third Way as adapting socialism to changed circumstances. Globalisation required new approaches. Evolution not abandonment.'
      }
    ],
    synoptic_links: [
      'Compare with traditional socialism',
      'Link to social democracy',
      'Connect to contemporary left debates'
    ],
    examples: [
      {
        title: 'Clause IV revision',
        context: 'Blair removed commitment to common ownership from Labour constitution. Symbolic rejection of traditional socialism.'
      },
      {
        title: 'Tax credits',
        context: 'Significant redistribution to working families. Used market mechanisms but socialist goal. Third Way as pragmatic socialism.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Define what socialist principles are',
      'Consider what "abandon" means - modify or reject?'
    ]
  },
  {
    id: 'ma196',
    question_id: 'q196',
    arguments_for: [
      {
        title: 'Cooperative nature',
        explanation: 'All socialists see humans as naturally cooperative. Marx\'s species-being, Kropotkin\'s mutual aid. Humans flourish through cooperation.'
      },
      {
        title: 'Common humanity',
        explanation: 'Socialists emphasise shared human nature across class divisions. Fraternity, solidarity, common bonds. Universal human nature.'
      },
      {
        title: 'Malleable nature',
        explanation: 'All socialists believe human nature is shaped by circumstances. Capitalism distorts; socialism would allow true nature to emerge.'
      },
      {
        title: 'Rejection of egoism',
        explanation: 'All socialists reject idea humans are naturally selfish. Competition is learned not innate. Shared critique of liberal/conservative view.'
      }
    ],
    arguments_against: [
      {
        title: 'Revolutionary optimism vs reformist caution',
        explanation: 'Marx believed revolutionary transformation would unleash human potential. Social democrats more cautious about perfectibility.'
      },
      {
        title: 'Perfectibility debated',
        explanation: 'Some socialists believe in human perfectibility. Others accept limitations. Degree of optimism varies.'
      },
      {
        title: 'Role of incentives',
        explanation: 'Social democrats accept some self-interest. Market incentives work. Not pure altruism. Pragmatic view of human motivation.'
      },
      {
        title: 'Third Way individualism',
        explanation: 'Blair accepted more individualistic view. Rights and responsibilities. Less emphasis on purely social human nature.'
      }
    ],
    synoptic_links: [
      'Compare with conservative pessimism',
      'Link to liberal rational self-interest',
      'Connect to anarchist optimism'
    ],
    examples: [
      {
        title: 'Marx on species-being',
        context: 'Humans are social, creative beings. Capitalism alienates us from true nature. Communism would allow human flourishing.'
      },
      {
        title: 'Webb\'s Fabianism',
        context: 'Believed in gradual improvement through expert administration. Less revolutionary optimism about transformed human nature.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Compare different socialist views',
      'Consider what "human nature" means for socialists'
    ]
  },
  {
    id: 'ma197',
    question_id: 'q197',
    arguments_for: [
      {
        title: 'Method differs fundamentally',
        explanation: 'Marx and Luxemburg demand revolutionary overthrow. Social democrats work through existing institutions. Different means entirely.'
      },
      {
        title: 'Ends differ too',
        explanation: 'Revolutionary socialism seeks communism, abolition of capitalism. Social democracy accepts reformed capitalism. Different endpoints.'
      },
      {
        title: 'State theory differs',
        explanation: 'Marx saw bourgeois state as instrument of class rule to be smashed. Social democrats use state for reform. Opposite state strategies.'
      },
      {
        title: 'Class conflict vs compromise',
        explanation: 'Revolutionary socialism emphasises irreconcilable class conflict. Social democracy seeks class compromise. Different political strategies.'
      }
    ],
    arguments_against: [
      {
        title: 'Common values',
        explanation: 'Both value equality, community, workers\' interests. Shared critique of unregulated capitalism. Core socialist values shared.'
      },
      {
        title: 'Historical continuity',
        explanation: 'Social democracy evolved from revolutionary socialism. Same movement, different historical moments. Continuity alongside change.'
      },
      {
        title: 'Degree not kind',
        explanation: 'Differences may be of degree not kind. Both seek greater equality, both criticise capitalism. Spectrum not dichotomy.'
      },
      {
        title: 'Luxemburg bridges divide',
        explanation: 'Luxemburg criticised reformism but also vanguardism. Shows complexity within revolutionary tradition. Not simple dichotomy.'
      }
    ],
    synoptic_links: [
      'Compare with liberal reform tradition',
      'Link to anarchist revolution',
      'Connect to historical socialist debates'
    ],
    examples: [
      {
        title: 'Luxemburg\'s Reform or Revolution',
        context: 'Argued reform cannot achieve socialism. Revolution necessary. Classic statement of revolutionary position against revisionism.'
      },
      {
        title: 'Crosland\'s revisionism',
        context: 'Argued socialism could be achieved through democratic reform of capitalism. Classic social democratic position.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Consider both means and ends',
      'Define what makes difference "fundamental"'
    ]
  },
  {
    id: 'ma198',
    question_id: 'q198',
    arguments_for: [
      {
        title: 'Social democrats accepted mixed economy',
        explanation: 'Crosland accepted private ownership could coexist with socialist goals. Mixed economy, not common ownership. Major shift.'
      },
      {
        title: 'Third Way rejected nationalisation',
        explanation: 'Blair removed Clause IV commitment to common ownership. Symbolic and substantive abandonment. New Labour not about ownership.'
      },
      {
        title: 'Privatisation accepted',
        explanation: 'No major reversal of Thatcher\'s privatisations. Rail, utilities remained private. Common ownership not restored.'
      },
      {
        title: 'Market mechanisms embraced',
        explanation: 'PFI, internal markets in NHS. Using private sector in public services. Far from common ownership.'
      }
    ],
    arguments_against: [
      {
        title: 'Revolutionary socialists maintain commitment',
        explanation: 'Marx and Engels\' common ownership remains principle for many. Socialist parties still advocate nationalisation. Commitment persists.'
      },
      {
        title: 'Corbyn revival',
        explanation: 'Corbyn\'s Labour proposed significant nationalisation - rail, utilities, mail. Common ownership returned to mainstream debate.'
      },
      {
        title: 'Public ownership supported',
        explanation: 'NHS, state education, public services still defended. Not all socialist commitment to collective provision abandoned.'
      },
      {
        title: 'Cooperatives and alternatives',
        explanation: 'Worker cooperatives, municipal ownership, community ownership. Different forms of common ownership survive and develop.'
      }
    ],
    synoptic_links: [
      'Compare with liberal private property',
      'Link to conservative privatisation',
      'Connect to contemporary ownership debates'
    ],
    examples: [
      {
        title: 'Clause IV revision 1995',
        context: 'Blair replaced commitment to common ownership with community values. Symbolic abandonment of traditional socialist economics.'
      },
      {
        title: 'Corbyn\'s manifesto 2017/2019',
        context: 'Proposed nationalisation of rail, water, energy, mail. Showed common ownership could return to mainstream politics.'
      }
    ],
    pitfalls: [
      'Use specification thinkers',
      'Consider different forms of common ownership',
      'Distinguish abandonment by some from abandonment by all'
    ]
  }
];
