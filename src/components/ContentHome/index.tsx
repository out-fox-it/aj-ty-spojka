import React from 'react'
import {
	HomeSection,
	HomeParagraph,
	HomePictureLeft,
	HomePictureRight,
	HomePictureClip,
	HomeSubsection,
	HomeSubtitle,
	HomeSectionMultipleItems,
} from './styled'
import czechtech20191 from '../../assets/Home/czechtech2019-1.jpg'
import linuxdays20191 from '../../assets/Home/linuxdays2019-1.jpg'

export const ContentHome: React.FC = () => (
	<>
		<HomeSection>
			<HomePictureLeft
				src={czechtech20191}
				title="CzechFuture.Tech, Plzeň 2019"
			/>
			<HomeParagraph>
				I v době globální pandemie jsme si dokázali zachovat skvělé
				konference a komunitu, která je tvoří. Dál sdílíme své znalosti
				a zkušenosti nejen s kolegy a přáteli, ale i s lidmi, s nimiž
				nás spojuje pouze láska ke světu IT. Online prostředí ovšem
				nedokáže nahradit to, co následuje po přednáškách. Ty okamžiky,
				kdy si můžeme společně zanadávat na sto a jeden bug vtírající se
				do našeho kódu a kdy se u piva dohadujeme, který jazyk to dělá
				nejlépe. A to je [: aj tý :] spojka - online networking pro
				programátory, podnět k produktivní prokrastinaci uprostřed další
				karantény a prostor pro týmovou práci.
			</HomeParagraph>
		</HomeSection>

		<HomeSectionMultipleItems>
			<HomeSubsection>
				<HomePictureClip>MENTEE</HomePictureClip>
				<HomeSubtitle>~ ŽÁDNÝ UČENÝ Z NEBE NESPADL ~</HomeSubtitle>
				<HomeParagraph>
					Menteee je začátečník v konkrétních technologiích, ať už se
					jedná o jazyk, knihovnu či framework, nebo celkově v
					programování. Hledá mentora, který by ho navedl správným
					směrem a rád by s ním konzultoval své první projekty.
				</HomeParagraph>
			</HomeSubsection>

			<HomeSubsection>
				<HomePictureClip>BUDDY</HomePictureClip>
				<HomeSubtitle>~ VÍC HLAV VÍC VÍ ~</HomeSubtitle>
				<HomeParagraph>
					Buddy je parťák pro volnočasový projekt v technologiích, ve
					kterých už se umí orientovat (nebo které se oba učíte).
					Společné deadliny vás udrží aktivní a dovedou každý projekt
					nebo katu ke zdárnému spuštění.
				</HomeParagraph>
			</HomeSubsection>

			<HomeSubsection>
				<HomePictureClip>MENTOR</HomePictureClip>
				<HomeSubtitle>~ NEJVÍC SE NAUČÍŠ UČENÍM ~</HomeSubtitle>
				<HomeParagraph>
					Mentor už má za sebou nejeden úspěšný projekt v
					technologiích, jejichž znalost by rád předal dál. Baví ho
					učení a/nebo má volnočasový projekt, na kterém je ochotný
					výměnou za pomoc nechat svého menteeho experimentovat.
				</HomeParagraph>
			</HomeSubsection>
		</HomeSectionMultipleItems>

		<HomeSection>
			<HomeParagraph>
				A jak si mentora, buddyho nebo menteeho najít? Stačí našemu
				matching algoritmu napovědět, koho hledáte. Recruiterů se přitom
				bát nemusíte, zobrazit totiž můžete pouze omezený počet profilů
				v omezeném počtu vyhledávání, kteří odpovídají vašemu hledání. V
				případě, že se vám někteří uživatelé zalíbí, jim pošlete žádost
				o spojení doplněnou o krátkou personalizovanou zprávu. Další
				krok je na nich - musí potvrdit, že se s vámi také chtějí
				spojit. Teprve poté, co je spojení potvrzeno, se vám vzájemně
				zviditelní kontaktní údaje.
				<br />
				<br />
				<strong>PRO TIP:</strong> Pro méně známé technologie si matching
				můžete nastavit i tak, že vám dorazí e-mail pokaždé, kdy se
				objeví nový uživatel kompatibilní s vaším hledáním.
			</HomeParagraph>
			<HomePictureRight
				src={linuxdays20191}
				title="Linux Days, ČVUT, Praha 2019"
			/>
		</HomeSection>
	</>
)

export default ContentHome
