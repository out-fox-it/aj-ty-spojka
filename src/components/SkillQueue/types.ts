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
