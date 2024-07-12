import React, { useEffect, useRef, useState } from "react";
import '../styles/StartForm.css';

const StartForm = () => {
   const [step, setStep] = useState(0);
   const [checked, setChecked] = useState(false);
   const [inputUsername, setInputUsername] = useState("");
   const [inputPassword, setInputPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");
   const [scrolledToBottom, setScrollToBottom] = useState(false);
   const [activeField, setActiveField] = useState("username");
   const [isUppercase, setIsUppercase] = useState(true);
   const tosRef = useRef(null);

   const toggleCase = () => {
      setIsUppercase(prevState => !prevState);
   }

   const handleNextStep = () => {
      if (step === 0) {
        setStep(1);
      } else if (step === 1 && checked) {
        setStep(2);
        setTimeout(() => {
          setStep(3);
        }, 1000);
      } else if (step === 4) {
        if (validateUsername(inputUsername) && validatePassword(inputPassword)) {
          setStep(5);
        } else {
          setErrorMessage("The username must be exactly 6 characters long and include only letters. The password must be exactly 8 characters long, include at least one number, one uppercase letter, one lowercase letter, and one special character.");
        }
      } else if (step === 5) {
        setStep(6);
      }
   };
    

   useEffect(() => {
      if (step === 1 && tosRef.current) {
         const slowScroll = (e) => {
            e.preventDefault();
            tosRef.current.scrollTop += e.deltaY * 0.03;
         };

         const checkScrollPosition = () => {
            if (tosRef.current.scrollTop + tosRef.current.clientHeight >= tosRef.current.scrollHeight) {
               setScrollToBottom(true);
            }
         }

         const tosElement = tosRef.current;
         tosElement.addEventListener('wheel', slowScroll);
         tosElement.addEventListener('scroll', checkScrollPosition);

         const preventDefault = (e) => e.preventDefault();

         const handleKeyDown = (e) => {
            if (e.key === 'PageUp' || e.key === 'PageDown') {
               e.preventDefault();
            }
         }

         tosElement.addEventListener('wheel', slowScroll);
         tosElement.addEventListener('mousedown', preventDefault);
         tosElement.addEventListener('keydown', handleKeyDown);

         return () => {
            tosElement.removeEventListener('wheel', slowScroll);
            tosElement.removeEventListener('scroll', checkScrollPosition);
            tosElement.removeEventListener('mousedown', preventDefault);
            tosElement.removeEventListener('keydown', handleKeyDown);
         }
      }
   }, [step]);

   const validateUsername = (username) => {
      const lengthRequirement = username.length === 6;
      const lettersOnlyRequirement = /^[A-Za-z]+$/.test(username);
      return lengthRequirement && lettersOnlyRequirement;
   };
    
    const validatePassword = (password) => {
      const lengthRequirement = password.length === 8;
      const numberRequirement = /\d/.test(password);
      const uppercaseRequirement = /[A-Z]/.test(password);
      const lowercaseRequirement = /[a-z]/.test(password);
      const specialCharRequirement = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      return lengthRequirement && numberRequirement && uppercaseRequirement && lowercaseRequirement && specialCharRequirement;
   };

   const handleKeyboardClick = (char) => {
      const charToInsert = isUppercase ? char.toUpperCase() : char.toLowerCase();
      if (activeField === "username") {
        setInputUsername((prev) => prev + charToInsert);
        document.getElementById("username").focus();
      } else if (activeField === "password") {
        setInputPassword((prev) => prev + charToInsert);
        document.getElementById("password").focus();
      }
   };

   return (
      <div className="start-form">
         {step === 0 && (
            <>
               <p>Access the secret by completing the important form.</p>
               <button className="fake-button">Start the Secret</button>
               <p className="hint-text">Clack on <span onClick={handleNextStep}>THE</span> button HERE to advance.</p>
            </>
         )}
         {step === 1 && (
            <>
               <p>Terms of Service</p>
               <textarea className="tos-text" readOnly ref={tosRef}>
                  These terms and conditions outline the rules and regulations for the use of [Insert company or website name]'s Website.

                  [Insert Company Or Website Name] is located at:
                  [insert street] [insert suburb], [insert city]
                  [insert state / region] - [insert zip], [insert country]
                  By accessing this website we assume you accept these terms and conditions in full. Do not continue to use [Insert company or website name]'s website if you do not accept all of the terms and conditions stated on this page.

                  The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: “Client”, “You” and “Your” refers to you, the person accessing this website and accepting the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law of [insert country]. Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                  Holding ALT to scroll faster is cheating and not allowed.

                  Cookies
                  We employ the use of cookies. By using [Insert company or website name]'s website you consent to the use of cookies in accordance with [Insert company or website name]’s privacy policy.

                  Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.

                  License
                  Unless otherwise stated, [Insert company or website name] and/or it’s licensors own the intellectual property rights for all material on [Insert company or website name]. All intellectual property rights are reserved. You may view and/or print pages from [insert website here] for your own personal use subject to restrictions set in these terms and conditions.

                  You must not:

                  Republish material from [insert website here]
                  Sell, rent or sub-license material from [insert website here]
                  Reproduce, duplicate or copy material from [insert website here]
                  Redistribute content from [Insert company or website name] (unless content is specifically made for redistribution).

                  User Comments
                  This Agreement shall begin on the date hereof.
                  Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data ('Comments') in areas of the website. [Insert company or website name] does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of[Insert company or website name], its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws [Insert company or website name]shall not be responsible or liable for the Comments or for any loss cost, liability, damages or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                  [Insert company or website name]reserves the right to monitor all Comments and to remove any Comments which it considers in its absolute discretion to be inappropriate, offensive or otherwise in breach of these Terms and Conditions.
                  You warrant and represent that:
                  You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
                  The Comments do not infringe any intellectual property right, including without limitation copyright, patent or trademark, or other proprietary right of any third party;
                  The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material or material which is an invasion of privacy
                  The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
                  You hereby grant to [Insert company or website name] a non-exclusive royalty-free license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                  Hyperlinking to our Content
                  The following organizations may link to our Web site without prior written approval:
                  Government agencies;
                  Search engines;
                  News organizations;
                  Online directory distributors when they list us in the directory may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and
                  Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
                  These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
                  We may consider and approve in our sole discretion other link requests from the following types of organizations:
                  commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union;
                  dot.com community sites;
                  associations or other groups representing charities, including charity giving sites,
                  online directory distributors;
                  internet portals;
                  accounting, law and consulting firms whose primary clients are businesses; and
                  educational institutions and trade associations.
                  We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on us or our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of ; and (d) where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization.

                  These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and it products or services; and (c) fits within the context of the linking party's site.

                  If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to [insert email here]. Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.

                  Approved organizations may hyperlink to our Web site as follows:

                  By use of our corporate name; or
                  By use of the uniform resource locator (Web address) being linked to; or
                  By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site.
                  No use of [Insert company or website name]’s logo or other artwork will be allowed for linking absent a trademark license agreement.

                  Iframes
                  Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Web site.

                  Reservation of Rights
                  We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.

                  Removal of links from our website
                  If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.

                  Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.

                  Content Liability
                  We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.

                  Disclaimer
                  To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:

                  limit or exclude our or your liability for death or personal injury resulting from negligence;
                  limit or exclude our or your liability for fraud or fraudulent misrepresentation;
                  limit any of our or your liabilities in any way that is not permitted under applicable law; or
                  exclude any of our or your liabilities that may not be excluded under applicable law.
                  The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.

                  To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
               </textarea>
               <div>
                  <input type="checkbox" id="tosCheck" onChange={() => setChecked(!checked)} disabled={!scrolledToBottom} />
                  <label htmlFor="tosCheck"> I agree to the Terms of Service</label>
               </div>
               <button className="tos-button" onClick={handleNextStep} disabled={!checked}>Okay</button>
            </>
         )}
         {step === 2 && (
            <>
               <p>Thanks for signing over your life. Hope you read the fine print.</p>
               {setTimeout(() => setStep(3), 1000)}
            </>
         )}
         {step === 3 && (
            <>
               <p>Solve this puzzle to continue:</p>
               <div className="puzzle">
                  <p>This is an unintuitive puzzle. Try to guess if you dare.</p>
                  <button onClick={() => setStep(4)}>Click on me if you think I am the answer.</button>
                  <p className="hint">Hint: It is not as obvious as you think.</p>
               </div>
            </>
         )}
         {step === 4 && (
            <>
               <p>Enter a username and password that meet the following requirements:</p>
               <ul>
                  <li>Username: Exactly 6 characters long and only letters</li>
                  <li>Password: Exactly 8 characters long, at least one number, one uppercase letter, one lowercase letter, and one special character</li>
               </ul>
               <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={inputUsername}
                  onClick={() => setActiveField("username")}
                  onKeyDown={(e) => e.preventDefault()}
               />
               <input
                  type="text"
                  id="password"
                  placeholder="Password"
                  value={inputPassword}
                  onClick={() => setActiveField("password")}
                  onKeyDown={(e) => e.preventDefault()}
               />
               <div className="on-screen-keyboard">
                  {'KQO56#$%A3MW^7*RL@J!2VFXNBHUEZITPDSG8CY0149'.split('').map(char => (
                     <button type="button" key={char} onClick={() => handleKeyboardClick(char)}>{char}</button>
                  ))}
                  <button type="button" onClick={toggleCase}>
                     {isUppercase ? "low" : "UP"}
                  </button>
               </div>
               <button onClick={handleNextStep}>Submit</button>
               {errorMessage && <p className="error-message">{errorMessage}</p>}
            </>
            )}

         {step === 5 && (
            // crazy captcha
            <p>Thanks for signing over your life. Hope you read the fine print.</p>
         )}
         {step === 6 && (
            // reward w/ password
            <p>Thanks for signing over your life. Hope you read the fine print.</p>
         )}
      </div>
   )
}

export default StartForm;