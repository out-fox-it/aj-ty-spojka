export enum SkillType {
	Language = 'language',
	Library = 'library',
	Framework = 'framework',
}

export type Skill = {
	title: string
	type: SkillType
	aliases: string[]
}

export const skillsData: ReadonlyArray<Skill> = [
	{
		title: 'JavaScript',
		type: SkillType.Language,
		aliases: ['JS'],
	},
	{
		title: 'TypeScript',
		type: SkillType.Language,
		aliases: ['TS'],
	},
	{
		title: 'React',
		type: SkillType.Library,
		aliases: ['React.js'],
	},
	{
		title: 'Clojure',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'ClojureScript',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Haskell',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Java',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'C#',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'PHP',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Vue',
		type: SkillType.Framework,
		aliases: ['Vue.js'],
	},
	{
		title: 'Nette',
		type: SkillType.Framework,
		aliases: [],
	},
	{
		title: 'Python',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Scala',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Go',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Elm',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Ruby',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Rust',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Scala',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Angular',
		type: SkillType.Language,
		aliases: ['Angular.js'],
	},
	{
		title: 'jQuery',
		type: SkillType.Framework,
		aliases: [],
	},
	{
		title: 'Django',
		type: SkillType.Framework,
		aliases: [],
	},
	{
		title: 'C',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Perl',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'C++',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'R',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Arduino',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Groovy',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Delphi',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Pascal',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'D',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'WebAssembly',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Swift',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'F#',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Erlang',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'HTML',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'CSS',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Node.js',
		type: SkillType.Framework,
		aliases: [],
	},
	{
		title: '.Net',
		type: SkillType.Framework,
		aliases: [],
	},
	{
		title: 'Kotlin',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Laravel',
		type: SkillType.Framework,
		aliases: [],
	},
	{
		title: 'Flask',
		type: SkillType.Framework,
		aliases: [],
	},
	{
		title: 'Julia',
		type: SkillType.Language,
		aliases: [],
	},
	{
		title: 'Symfony',
		type: SkillType.Framework,
		aliases: [],
	},
	{
		title: 'Gatsby',
		type: SkillType.Framework,
		aliases: [],
	},
	{
		title: 'Drupal',
		type: SkillType.Framework,
		aliases: [],
	},
	{
		title: 'ASP.NET',
		type: SkillType.Language,
		aliases: [],
	},
]
