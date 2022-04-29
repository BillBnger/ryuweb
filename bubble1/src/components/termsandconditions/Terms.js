import React from 'react';
import { Container, Typography } from '@mui/material';
import ScrollToTop from '../scrolltotop/scrolltoTop';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  bodyTopSec: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '20px',
    color: '#fff',
  },
  bodyText: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '30px',
    color: '#fff',
  },
  bodyTitle: {
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontSize: '18px',
    color: '#fff',
  },
});

function Terms() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ScrollToTop />
      <Container
        sx={{
          mt: 2,
          mb: 5,
          pt: 5,
          background: 'rgba(256, 256, 256, 0.15)',
          pb: 5,
          borderRadius: '20px 20px 20px 20px',
        }}
        maxWidth='lg'
      >
        <Typography
          variant='h1'
          gutterBottom
          sx={{
            fontWeight: '900',
            fontFamily: 'Poppins',
            fontSize: '48px',
            ml: 4,
            color: '#fff',
          }}
        >
          TERMS &{' '}
          <Box component='span' sx={{ color: '#FF2FDE' }}>
            {' '}
            CONDITIONS{' '}
          </Box>
        </Typography>
        <Typography
          variant='h5'
          className={classes.bodyTopSec}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          These terms and conditions (“Terms & Conditions”) govern your use of
          the bubblefaction.com website, including your purchase of any Bubble
          Faction NFTs; by using this website or attempting to purchase a Bubble
          Faction NFT, you accept these Terms & Conditions in full. If you
          disagree with the Terms & Conditions or any part of these Terms &
          Conditions, you must not use the bubblefaction.com website or attempt
          to purchase any Bubble Faction NFT.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Definitions
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          “Art” means any art, designs, drawings, traits, layers, and other
          design elements that may be associated with a Licensed NFT that you
          own.<br></br> “Content” means text, images, audio material, video
          material, audio-visual material, or other forms of media. <br></br>
          “Licensed NFT” means a non-fungible token that you own and was
          originally minted on this site.<br></br> “NFT” means any
          blockchain-tracked, non-fungible token. “NFT Trading Platform” means a
          secure marketplace where NFTs are sold, transferred, and recorded on
          the applicable blockchain and such transactions can be proven by the
          applicable blockchain. <br></br>“Own” or “Ownership” means, with
          respect to a Licensed NFT, a Licensed NFT that you have purchased
          through the Website or otherwise rightfully acquired from a legitimate
          source, where proof of purchase was recorded on the applicable
          blockchain and ownership of the Licensed NFT can be proven. “Owner”
          means someone who has rightful and legal Ownership of a Licensed NFT.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Your Acceptance
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 2, pb: 2, pl: 4, pr: 4 }}
        >
          These Terms & Conditions constitute an agreement ("Agreement") between
          LEFT2DROP, LDA, the owner and operator of the Bubble Faction website,
          https://bubblefaction.com (the “Site” or “Website”), and you (“you”,
          “your” or “user(s)”), a user of the Site. Throughout this Agreement,
          the words “LEFT2DROP,” “Bubble Faction”, “us,” “we,” and “our,” refer
          to our company, LEFT2DROP, LDA. BY ACCESSING THIS WEBSITE, YOU AGREE
          TO AND ACCEPT THESE TERMS AND CONDITIONS IN FULL AND WITHOUT
          RESERVATION. IF YOU DISAGREE WITH THESE TERMS & CONDITIONS, YOU MAY
          NOT USE THIS WEBSITE OR ATTEMPT TO PURCHASE ANY BUBBLE FACTION NFTS.
          We may amend this Agreement at any time so please come back and review
          these Terms & Conditions often.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 2, pb: 2, pl: 4, pr: 4 }}>
          LEFT2DROP Ownership
        </Box>

        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          Unless otherwise stated, LEFT2DROP and/or its licensors and affiliates
          own the intellectual property rights published on this website,
          including all text, data, graphics, photographs, images, audio, video,
          trademarks, service marks, trade names and other information, visual
          or other digital material, software (including source and object
          codes) and all other content or any description available on the Site
          or available via a link from Site to a page created by LEFT2DROP on
          another website (collectively, the "LEFT2DROP Content"). The LEFT2DROP
          Content is the sole property of LEFT2DROP and/or its licensors,
          affiliates, or third-party service providers. You acknowledge and
          agree that LEFT2DROP and/or its licensors and affiliates own all legal
          rights, title, interest in the Art associated with any Licensed NFTs,
          and all intellectual property rights, including but not limited to,
          trademark and copyright rights, therein. Any rights provided to you
          upon purchase or ownership of a Licensed NFT are limited to those
          expressly stated herein. LEFT2DROP reserves all rights and ownership
          to the Licensed NFTs and Art not specifically granted to the User in
          this Agreement. Purchase Any payments of financial transactions that
          you conduct or engage in through the Site are final. You acknowledge
          and understand that the Site cannot and will not reverse any payments
          or transactions. All purchases of Licensed NFTs, as well as any
          associated charges, are non-refundable. You shall be responsible for
          all applicable taxes including any sales or compensating use tax or
          equivalent tax wherever such tax may arise. The user accepts and
          acknowledges that LEFT2DROP and its Affiliates will not be responsible
          for any communication failures, disruptions, distortions, delays, or
          any other errors that may arise when you attempt to purchase any
          Licensed NFTS.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          User Ownership
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          Upon you assuming Ownership of a Licensed NFT and accepting the Terms
          and Conditions of this Agreement, LEFT2DROP shall grant you a
          non-exclusive, worldwide, royalty-free license to 1) use, display, or
          otherwise enjoy the Art of your Licensed NFT for your own personal
          use; 2) commercialize your Licensed NFT by producing and selling
          physical merchandise that portrays the Licensed NFT’s underlying Art
          in its entirety; 3) sell or transfer your Licensed NFTs to another
          party pursuant to Section 7 of this Agreement; and 4) use your
          Licensed NFT as part of a third-party website or application which
          permits the inclusion, involvement, and/or participation for your
          Licensed NFTs, provided that the website or application
          cryptographically permits and verifies each NFT owner’s rights and
          ownership to display the Art and the website or application ensures
          only the actual owner can display the Art. LEFT2DROP may provide you,
          the Owner of a Licensed NFT, a cropped version of the character
          portrayed in the Licensed NFT (“Licensed NFT Crop”). In the event that
          you are provided a Licensed NFT Crop, LEFT2DROP grants you a
          non-exclusive, worldwide, royalty-free license to use, display, or
          otherwise enjoy the Licensed NFT Crop solely for your own personal use
          and not for any commercial use of any kind. You understand and agree
          that these rights are licensed solely to the rightful and legal Owner
          of the Licensed NFT. Your licensed rights to the Licensed NFT will
          terminate upon the rightful and legal sale or transfer of your
          Licensed NFT in accordance with Sections 7 and 8 of this Agreement and
          the new Owner, upon their acceptance of the Terms and Conditions of
          this Agreement, shall receive these licensed rights. Restrictions to
          Use You understand and agree that any physical merchandise that you
          produce must incorporate every element and trait of your Licensed NFT
          in full. The individual layers and traits of the Licensed NFTs are not
          owned by you and are the sole property of LEFT2DROP and/or its
          licensors and affiliates. Such commercialization rights are limited to
          the Licensed NFTs that you own, and those rights do not extend to or
          include the Licensed NFT Crops that LEFT2DROP may provide to you. You
          further understand and agree that this license does not permit the
          ability to create any digital merchandise. The creation and minting of
          any new NFTs which are derivatives of your Licensed NFTs are expressly
          prohibited. You understand and acknowledge that you may not, nor
          permit any third party to do or attempt to do the foregoing without
          the express prior written consent from LEFT2DROP; (1) modify the Art
          in your Licensed NFT or any applicable Licensed NFT Crop in any way,
          including, without limitation, the shapes, designs, drawings,
          attributes, color schemes, or design elements of the Licensed NFT; (2)
          produce any merchandise in connection with your Licensed NFT that
          depicts lewd behavior, illegality, hatred, intolerance, cruelty,
          vulgarity, pornographic or other “adult-only” material,
          discrimination, or otherwise harmful material to the Art and Bubble
          Faction Brand; (3) or attempt to trademark, copyright, or otherwise
          attempt to acquire additional intellectual property rights in your
          Licensed NFT or any applicable Licensed NFT Crop.
        </Typography>

        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Transfer
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          You have the limited right to transfer or sell your Licensed NFTs on
          an NFT Trading Platform, provided that the transferee or purchaser
          understands and accepts the terms of this Agreement and the terms of
          the NFT trading platform applicable Terms & Conditions and that prior
          to the transfer, you have not breached this Agreement or the Terms &
          Conditions of the NFT Trading Platform. LEFT2DROP is not responsible
          for any transactions between you and a third party, including using
          any NFT Trading Platform to transfer your Licensed NFTs. LEFT2DROP
          shall have no responsibilities or liability with respect to any
          transfer you enact on any of these NFT Trading Platforms.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Termination of License
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          The licensed rights granted to you in Section 5 of this Agreement
          shall automatically terminate if you perform any of the following
          actions: 1) you sell, trade, donate, or otherwise transfer your
          Licensed NFT in any manner; (2) you breach any terms of this Agreement
          or any Terms & Conditions for the designated NFT Trading Platform; or
          (3) you engage in or initiate any legal actions against LEFT2DROP
          and/or any of their affiliates, and each of their respective officers,
          directors, members, affiliates, agents, or employees. Upon termination
          of your licensed rights, you must immediately cease and desist all
          activities and rights granted to you from Section 5. This includes
          ceasing all activities involving the Licensed NFT for your own
          personal use and creating or selling physical merchandise that
          incorporates the Art of the Licensed NFT.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Assumption of Risk
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          You understand and agree that the Licensed NFTs are made solely for
          entertainment purposes only. You agree and understand that that: (1)
          the market and prices for a blockchain asset are extremely volatile
          and subjective and collectible blockchain assets, such as the Licensed
          NFTs, have no inherent or intrinsic value, and fluctuations in the
          price of such blockchain assets could materially and adversely affect
          the price and value of your Licensed NFTs; (2) there are risks
          involved with using internet-based currency and asset, including, but
          not limited to, risk of hardware, software, internet connection
          failure, risk of malicious software, and risk that unauthorized
          parties may gain access to your personal information including such
          information and assets contained in your digital wallet or elsewhere;
          (3) internet-based currency and assets are not currently regulated by
          any regulatory regimes, and new regulations or policies that may
          materially affect the value of any Licensed NFTs; (4) there is an
          inherent risk that you may lose access due to loss of private keys,
          custodial error, or even purchaser error; (5) there are risks related
          to taxation; and (6) LEFT2DROP does not make any guarantees or
          representations about the availability of the Licensed NFTs or the art
          or that they will host the Licensed NFTs or the Art in any specific
          location for any specific period of time. You agree that you have
          received sufficient information to make an informed decision regarding
          the decision to purchase or otherwise obtain the Licensed NFTs and
          that you understand and agree that you are solely responsible for
          determining the value, nature, and appropriateness of the above risks
          for yourself.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Limitation of Liability
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          ALL LICENSED NFTS ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT
          WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. LEFT2DROP AND ITS
          AFFILIATES HEREBY DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
          INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY
          AND FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT
          SHALL LEFT2DROP BE LIABLE TO YOU FOR ANY INDIRECT, EXTRAORDINARY,
          EXEMPLARY, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES
          (INCLUDING LOSS OF DATA, GOODWILL, WORK STOPPAGE, DIMINUTION OF VALUE
          OR ANY OTHER INTANGIBLE LOSS, TECHNOLOGY FAILURE, OR MALFUNCTION,
          REVENUE, PROFITS, USE OR OTHER ECONOMIC ADVANTAGE RELATED TO ANY
          LICENSED NFT OR OTHERWISE) HOWEVER ARISING, EVEN IF LEFT2DROP KNOWS
          THERE IS A POSSIBILITY OF SUCH DAMAGE.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Release
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          IF YOU ARE A RESIDENT OF A JURISDICTION THAT REQUIRES A SPECIFIC
          STATEMENT REGARDING RELEASE THEN THE FOLLOWING APPLIES. FOR EXAMPLE,
          PORTUGAL RESIDENTS’ MUST, AS A CONDITION OF THIS AGREEMENT, WAIVE THE
          APPLICABILITY OF PORTUGAL CIVIL CODE SECTION, WHICH STATES, “A GENERAL
          RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR
          SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE
          RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED
          HIS OR HER SETTLEMENT WITH THE DEBTOR." YOU HEREBY WAIVE THIS SECTION
          OF THE CIVIL CODE. YOU HEREBY WAIVE ANY SIMILAR PROVISION IN LAW,
          REGULATION, OR CODE THAT HAS THE SAME INTENT OR EFFECT AS THE
          AFOREMENTIONED RELEASE. YOU RELEASE US FROM ANY LIABILITY RELATING TO
          OUR SITE OR LEFT2DROP CONTENT, AND YOU RELEASE US, OUR DIRECTORS,
          OFFICERS, EMPLOYEES, AFFILIATES, AND AGENTS FROM ANY CLAIMS AND
          DAMAGES, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED
          WITH ANY CLAIM YOU HAVE AGAINST US. 12. Digital Millenium Copyright
          Act of 1988 The Digital Millennium Copyright Act of 1998 (the “DMCA”)
          provides recourse for copyright owners who believe that material
          appearing on the Internet infringes their rights under the U.S.
          copyright law. If you believe in good faith that materials hosted by
          LEFT2DROP infringe your copyright, you, or your agent may send to
          LEFT2DROP a notice requesting that the material be removed or access
          to it be blocked. Any notification by a copyright owner or a person
          authorized to act on its behalf that fails to comply with requirements
          of the DMCA shall not be considered sufficient notice and shall not be
          deemed to confer upon LEFT2DROP actual knowledge of facts or
          circumstances from which infringing material or acts are evident. If
          you believe in good faith that a notice of copyright infringement has
          been wrongly filed against you, the DMCA permits you to send to
          LEFT2DROP a counter-notice. All notices and counter-notices must meet
          the then-current statutory requirements imposed by the DMCA; see
          http://www.loc.gov/copyright for details. LEFT2DROP’s Copyright Agent
          for notice of claims of copyright infringement or counter notices can
          be reached as follows: through a direct message to LEFT2DROP’s Twitter
          at @LEFT2DROP.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Site Availability and Modification
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          Although we attempt to provide continuous Site availability to you, we
          do not guarantee that the Site will always be available, work, or be
          accessible at any particular time. We reserve the right to alter,
          modify, update, or remove portions of our Site at any time. We may
          conduct such modifications to our Site for security reasons,
          intellectual property, legal reasons, or various other reasons at our
          discretion; however, nothing in this section obligates us to take
          measures to update the Site for security, legal, or other reasons.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 2, pb: 2, pl: 4, pr: 4 }}>
          Unauthorized Conduct
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          When accessing or using our Site, you are solely responsible for your
          actions, and you agree to abide by the following rules of conduct: You
          agree not to copy, distribute or disclose any part of the Site in any
          medium, including without limitation by any automated or non-automated
          “scraping;” You agree not to attempt to interfere with, compromise the
          system integrity or security, or decipher any transmissions to or from
          the servers running the Site; You agree not to use any robot, spider,
          crawler, scraper or other automated means or interface not provided by
          us to access the Site or to extract or export data collected through
          the Site; You agree not to take any action that imposes, or may impose
          at our sole discretion, an unreasonable or disproportionately large
          load on our infrastructure; You agree that you will not hold
          LEFT2DROP, any of its affiliates, or its third-party providers
          responsible for your use of the Site; You agree not to violate any
          requirements, procedures, policies, or regulations of networks
          connected to LEFT2DROP; You agree not to interfere with or disrupt the
          Site; You agree not to post anything contrary to our public image,
          goodwill, or reputation; You agree to not violate any federal laws,
          state laws, or local laws while using the Site; and You agree not to
          use the Site in any way that is: misleading, unlawful, defamatory,
          obscene, invasive, threatening, harmful, or harassing. If you are
          discovered to be undertaking any of the aforementioned actions your
          privileges to use our Site may, at our discretion, be terminated or
          suspended. LEFT2DROP reserves the right to suspend or terminate your
          access at any time without notice or explanation.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 2, pb: 2, pl: 4, pr: 4 }}>
          Indemnity
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          You agree to defend, indemnify and hold harmless LEFT2DROP, its
          officers, directors, employees, affiliates, third-parties, and agents,
          from and against any and all claims, damages, obligations, losses,
          liabilities, costs or debt, and expenses (including but not limited to
          attorney's fees) arising from: your use of any LEFT2DROP Site; your
          use of any LEFT2DROP affiliate services; your violation of any term of
          this Agreement; or arising out of any claim that you have breached any
          provision of these Terms & Conditions. This defense and
          indemnification obligation will survive this Agreement. You also agree
          that you have a duty to defend us against such claims and we may
          require you to pay for an attorney(s) of our choice in such cases. You
          agree that this indemnity extends to requiring you to pay for our
          reasonable attorneys’ fees, court costs, and disbursements. In the
          event of a claim such as one described in this paragraph, we may elect
          to settle with the party/parties making the claim and you shall be
          liable for the damages as though we had proceeded with a trial.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Choice of Law & Venue
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          This Agreement and any action related to this Agreement shall be
          governed by the laws.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Forum
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          By using this Site, you agree that: (1) any claim, dispute, or
          controversy you may have against us, LEFT2DROP, or the Site arising
          out of, relating to, or connected in any way with this Agreement or
          any Licensed NFTs purchased shall be resolved exclusively by final and
          binding arbitration administered by the American Arbitration
          Association (“AAA”) and conducted before a single arbitrator pursuant
          to the applicable Consumer Rules and Procedures established by AAA
          (“Rules and Procedures”); (2) the claim or dispute must be brought
          within one (1) year of the first date of the event giving rise to such
          action and the arbitration shall be held in Portugal or at such other
          location as may be mutually agreed upon by you and LEFT2DROP; (3) the
          arbitrator shall apply Portugal law consistent with the Federal
          Arbitration Act and applicable statutes of limitations, and shall
          honor claims of privilege recognized at law; (4) there shall be no
          authority for any claims to be arbitrated on a class or representative
          basis; arbitration can decide only your and/or LEFT2DROP individual
          claims; and the arbitrator may not consolidate or join the claims of
          other persons or parties who may be similarly situated (this does not
          apply to New Jersey users); (5) both parties will bear their own costs
          of representation and filing for the dispute; (6) where possible and
          allowed for under the AAA Rules and Procedures both parties shall be
          entitled to appear electronically or telephonically for all
          proceedings; and (7) with the exception of subpart (4) above, if any
          part of this arbitration provision is deemed to be invalid,
          unenforceable or illegal, or otherwise conflicts with the Rules and
          Procedures established by AAA, then the balance of this arbitration
          provision shall remain in effect and shall be construed in accordance
          with its terms as if the invalid, unenforceable, illegal or
          conflicting provision were not contained herein. If, however, subpart
          (4) is found to be invalid, unenforceable, or illegal, then the
          entirety of this Arbitration Provision shall be null and void, and
          neither you nor LEFT2DROP shall be entitled to arbitrate their
          dispute. For more information on AAA and its Rules and Procedures,
          users may visit the AAA website at http://www.adr.org. In the event
          that any portion of this arbitration provision is found to be
          unenforceable or void, both parties agree to settle any disputes
          arising out of this Agreement in a court of competent jurisdiction
          located in or near Portugal.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Class Action Waiver
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          You and LEFT2DROP agree that any proceedings to resolve or litigate
          any dispute whether through a court of law or arbitration shall be
          solely conducted on an individual basis. You agree that you will not
          seek to have any dispute heard as a class action, representative
          action, collective action, or private attorney general action.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Severability
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          In the event that a provision of this Agreement is found to be
          unlawful, conflicting with another provision of the Agreement, or
          otherwise unenforceable, the Agreement will remain in force as though
          it had been entered into without that unenforceable provision being
          included in it. If two or more provisions of this Agreement or any
          other agreement you may have with LEFT2DROP are deemed to conflict
          with each other’s operation, you agree that LEFT2DROP shall have the
          sole right to elect which provision remains in force.
        </Typography>

        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Waiver
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          We reserve all rights permitted to us under this Agreement as well as
          under the provisions of any applicable law. Our non-enforcement of any
          particular provision or provisions of this Agreement or any applicable
          law should not be construed as our waiver of the right to enforce that
          same provision under the same or different circumstances at any time
          in the future.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          No Joint
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          Venture This Agreement shall not constitute a joint venture,
          partnership, employment, or agency relationship between the parties.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Survival
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          All provisions of this Agreement which by their nature should survive
          termination shall survive termination, including, without limitation,
          ownership provisions, warranty disclaimers, indemnity, and limitations
          of liability. You agree that we are not required to provide you with
          access to our Site and may terminate our Site or your access to the
          Site at any time and for any reason.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Age
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          All users who access the Site or buy Licensed NFTs must be 18 years of
          age or older.
        </Typography>
        <Box className={classes.bodyTitle} sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}>
          Amendments
        </Box>
        <Typography
          className={classes.bodyText}
          sx={{ pt: 1, pb: 1, pl: 4, pr: 4 }}
        >
          We may amend this Agreement from time to time. When we amend this
          Agreement, we will update this page and indicate the date that it was
          last modified, or we may email you. You may refuse to agree to the
          amendments, but if you do, you must immediately cease using our Site.
          Amended Terms & Conditions will apply to the use of this Site from the
          date of publication of the amended Terms & Conditions of this Site.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Terms;
