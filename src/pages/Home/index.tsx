import React from 'react'
import NavBar from '../../components/NavBar'
import Page from '../../components/Page'
import Footer from '../../components/Footer'
import { StyledParagraph } from '../../components/StyledText/StyledParagraph'
import { HomeSection, HomePicture } from './styled'
import ThreeColumnsSubsection from './components/ThreeColumnsSubsection'

import czechtech20191 from '../../assets/Home/czechtech2019-1.jpg'
import linuxdays20191 from '../../assets/Home/linuxdays2019-1.jpg'

const Home: React.FC = () => (
	<>
		<NavBar />
		<Page>
			<HomeSection>
				<HomePicture
					src={czechtech20191}
					borderRadius="2em 2em 0 2em"
					title="CzechFuture.Tech, Plzeň 2019"
					alt="CzechFuture.Tech, Plzeň 2019"
				/>
				<StyledParagraph>
					I v době globální pandemie jsme si dokázali zachovat skvělé
					konference a komunitu, která je tvoří. Dál sdílíme své
					znalosti a zkušenosti nejen s kolegy a přáteli, ale i s
					lidmi, s nimi nás spojuje pouze láska ke světu IT. Online
					prostředí ovše nedokáže nahradit to, co následuje po
					přednáškách. Ty okamžiky kdy si můžeme společně zanadávat na
					sto a jeden bug vtírající do našeho kódu a kdy se u piva
					dohadujeme, který jazyk to d nejlépe. A to je [: aj tý :]
					spojka - online networking pr programátory, podnět k
					produktivní prokrastinaci uprostřed další karantény a
					prostor pro týmovou práci.
				</StyledParagraph>
			</HomeSection>

			<ThreeColumnsSubsection />

			<HomeSection>
				<StyledParagraph>
					A jak si mentora, buddyho nebo menteeho najít? Stačí našemu
					matching algoritmu napovědět, koho hledáte. Recruiterů se
					přitom bát nemusíte, zobrazit totiž můžete pouze omezený
					počet profilů v omezeném počtu vyhledávání, kteří odpovídají
					vašemu hledání. V případě, že se vám někteří uživatelé
					zalíbí, jim pošlete žádos o spojení doplněnou o krátkou
					personalizovanou zprávu.Dalš krok je na nich - musí
					potvrdit, že se s vámi také chtě spojit. Teprve poté, co je
					spojení potvrzeno, se vám vzájemně zviditelní kontaktní
					údaje.
					<br />
					<br />
					<strong>PRO TIP:</strong> Pro méně známé technologie si
					matching můžete nastavit i tak, že vám dorazí e-mail
					pokaždé, kdy se objeví nový uživatel kompatibilní s vaším
					hledáním.
				</StyledParagraph>
				<HomePicture
					src={linuxdays20191}
					borderRadius="0 2em 2em 2em"
					title="Linux Days, ČVUT, Praha 2019"
					alt="Linux Days, ČVUT, Praha 2019"
				/>
			</HomeSection>
		</Page>
		<Footer />
	</>
)

export default Home
