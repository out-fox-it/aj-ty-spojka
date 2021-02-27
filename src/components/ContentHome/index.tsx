import React from 'react'
import {
	HomeSection,
	HomePictureLeft,
	HomePictureRight,
	HomePictureClip,
	HomeSubsection,
	HomeSubtitle,
	HomeSectionMultipleItems,
} from './styled'
import czechtech20191 from '../../assets/Home/czechtech2019-1.jpg'
import linuxdays20191 from '../../assets/Home/linuxdays2019-1.jpg'
import { useThemeControl } from '../Theme'
import { StyledParagraph } from '../StyledText/StyledParagraph'

export const ContentHome: React.FC = () => {
	const [theme] = useThemeControl()

	return (
		<>
			<HomeSection>
				<HomePictureLeft
					src={czechtech20191}
					title="CzechFuture.Tech, Plzeň 2019"
				/>
				<StyledParagraph>
					I v době globální pandemie jsme si dokázali zachovat skvělé
					konference a komunitu, která je tvoří.Dál sdílíme své
					znalosti a zkušenosti nejen s kolegy a přáteli, ale i s
					lidmi, s nimi nás spojuje pouze láska ke světu IT.Online
					prostředí ovše nedokáže nahradit to, co následuje po
					přednáškách.Ty okamžiky kdy si můžeme společně zanadávat na
					sto a jeden bug vtírající do našeho kódu a kdy se u piva
					dohadujeme, který jazyk to d nejlépe.A to je[: aj tý:
					]spojka - online networking pr programátory, podnět k
					produktivní prokrastinaci uprostřed další karantény a
					prostor pro týmovou práci.
				</StyledParagraph>
			</HomeSection>

			<HomeSectionMultipleItems>
				<HomeSubsection>
					<HomePictureClip>MENTEE</HomePictureClip>
					<HomeSubtitle setColor={theme}>
						~ ŽÁDNÝ UČENÝ Z NEBE NESPADL ~
					</HomeSubtitle>
					<StyledParagraph>
						Menteee je začátečník v konkrétních technologiích, ať už
						se jedná o jazyk, knihovnu či framework, nebo celkově
						programování.Hledá mentora, který by ho navedl správným
						směrem a rád by s ním konzultoval své první projekty.
					</StyledParagraph>
				</HomeSubsection>

				<HomeSubsection>
					<HomePictureClip>BUDDY</HomePictureClip>
					<HomeSubtitle setColor={theme}>
						~ VÍC HLAV VÍC VÍ ~
					</HomeSubtitle>
					<StyledParagraph>
						Buddy je parťák pro volnočasový projekt v technologiích,
						ve kterých už se umí orientovat (nebo které se oba
						učíte) Společné deadliny vás udrží aktivní a dovedou
						každý projekt nebo katu ke zdárnému spuštění.
					</StyledParagraph>
				</HomeSubsection>

				<HomeSubsection>
					<HomePictureClip>MENTOR</HomePictureClip>
					<HomeSubtitle setColor={theme}>
						~ NEJVÍC SE NAUČÍŠ UČENÍM ~
					</HomeSubtitle>
					<StyledParagraph>
						Mentor už má za sebou nejeden úspěšný projekt v
						technologiích, jejichž znalost by rád předal dál.Baví ho
						učení a/nebo má volnočasový projekt, na kterém je
						ochotný výměnou za pomoc nechat svého menteeho
						experimentovat.
					</StyledParagraph>
				</HomeSubsection>
			</HomeSectionMultipleItems>

			<HomeSection>
				<StyledParagraph>
					A jak si mentora, buddyho nebo menteeho najít?Stačí našemu
					matching algoritmu napovědět, koho hledáte.Recruiterů se
					přitom bát nemusíte, zobrazit totiž můžete pouze omezený
					počet profilů v omezeném počtu vyhledávání, kteří odpovídají
					vašemu hledání.V případě, že se vám někteří uživatelé
					zalíbí, jim pošlete žádos o spojení doplněnou o krátkou
					personalizovanou zprávu.Dalš krok je na nich - musí
					potvrdit, že se s vámi také chtě spojit.Teprve poté, co je
					spojení potvrzeno, se vám vzájemně zviditelní kontaktní
					údaje.
					<br />
					<br />
					<strong>PRO TIP:</strong> Pro méně známé technologie si
					matching můžete nastavit i tak, že vám dorazí e-mail
					pokaždé, kdy se objeví nový uživatel kompatibilní s vaším
					hledáním.
				</StyledParagraph>
				<HomePictureRight
					src={linuxdays20191}
					title="Linux Days, ČVUT, Praha 2019"
				/>
			</HomeSection>
		</>
	)
}

export default ContentHome
