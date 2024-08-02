const sections = [
    {
      title: "About Ledger Recover",
      questions: [
        {
          question: "What is Ledger Recover?",
          answer: "Ledger Recover is an ID-based key recovery service that provides a backup for your Secret Recovery Phrase. If you lose or don't have access to your Secret Recovery Phrase, the service allows you to securely restore your private keys using a Ledger device."
        },
        {
          question: "Why do I need Ledger Recover?",
          answer: "You’re responsible for storing your Secret Recovery Phrase. While this setup makes you enjoy all the benefits of self-custody and complete control over your assets, it also makes you solely responsible for their protection. Ledger Recover is designed for users who want to add an enhanced layer of security in case their Secret Recovery Phrase is lost or when they can't access it."
        },
        {
          question: "Who has access to my wallet with Ledger Recover?",
          answer: "In short, only you can access your wallet. When you subscribe to Ledger Recover, a pre-BIP39 version of your private key is encrypted, duplicated and divided into three fragments, with each fragment secured by a separate company—Coincover, Ledger and EscrowTech. Each of these encrypted fragments is useless on its own. When you want to get access to your wallet, 2 of the 3 parties will send fragments back to your Ledger device, reassembling them to build your private key."
        },
        {
          question: "What would happen to my Ledger Recover subscription and related data if one of the companies goes out of business?",
          answer: "In short, only you can access your wallet. When you subscribe to Ledger Recover, a pre-BIP39 version of your private key is encrypted, duplicated and divided into three fragments, with each fragment secured by a separate company—Coincover, Ledger and EscrowTech. Each of these encrypted fragments is useless on its own. When you want to get access to your wallet, 2 of the 3 parties will send fragments back to your Ledger device, reassembling them to build your private key."
        },
        {
          question: "What should I do with my recovery sheet once I subscribe to Ledger Recover?",
          answer: "Ledger Recover can restore your private keys to your device, but it can't provide you with your Secret Recovery Phrase. If you have any other physical/digital copies of your recovery sheet or Secret Recovery Phrase, it's your responsibility to secure them. Keep in mind that anyone who obtains your Secret Recovery Phrase can access your wallet."
        },
        {
          question: "What is Coincover?",
          answer: "Coincover provides the gold standard in digital asset security, addressing the most significant barrier to mainstream adoption: trust. If wallet access is lost, Coincover offers encrypted and military-grade storage for retrieving the key."
        }
      ]
    },
    {
      title: "Restrictions",
      questions: [
        {
          question: "What Ledger devices are compatible with Ledger Recover?",
          answer: "Ledger Recover is compatible with Ledger Nano X (through the Ledger Live desktop and mobile app) and with Ledger Nano S Plus (through the Ledger Live desktop app only). Soon, it will also be compatible with Ledger Stax. ⚠ Ledger Recover isn't compatible with Ledger Nano S."
        },
        {
          question: "In which countries/regions is Ledger Recover available?",
          answer: (
            <div>
            <p>Ledger Recover availability depends on the country/region in which your passport, national identity card, or driver’s license was issued. Ledger Recover is currently available in the following countries/regions:</p>
            <ul className="list-disc ml-5">
              <li><span className="font-bold">Passport, national identity card, or driver&apos; license: </span>Canada, United States.</li>
              <li><span className="font-bold">Passport or national identity card: </span>Countries in the European Union, United Kingdom.</li>
              <li><span className="font-bold">Passport:</span> Argentina, Australia, Brazil, China, Colombia, Hong Kong, India, Indonesia, Israel, Japan, Malaysia, Mexico, New Zealand, Nigeria, Singapore, South Africa, Korea (Republic of), Switzerland, Taiwan, Thailand, Türkiye, Ukraine, United Arab Emirates, Vietnam.</li>
            </ul>
            <p className="my-">We will be covering more countries/regions and adding support for more documents. Stay tuned.</p>
          </div>
          )
        },
        {
          question: "Can I have multiple Ledger Recover subscriptions?",
          answer: "Currently, you can set up a backup for one Secret Recovery Phrase per subscription."
        },
        {
          question: "Is Ledger Recover available both on desktop and mobile?",
          answer: "With Ledger Nano X, Ledger Recover is available on the Ledger Live desktop and mobile app. With Ledger Nano S Plus, the service is available on desktop only."
        },
        {
          question: "Is Ledger Recover available to B2B businesses such as companies, enterprises, or institutions?",
          answer: (
            <div>
              <p className="">Ledger Recover, provided by Coincover, is an ID-based key recovery service that provides a backup for your Secret Recovery Phrase, and is a dedicated service for individual consumers. It is not designed for use by enterprises, companies, businesses, or institutions and considering how it is set up, we advise against using it for organisations that often have specific governance needs.</p>
              <p className="">Please contact Ledger Support for additional information. If you are an organisation, to learn more about B2B solutions that can help you manage your digital assets, we encourage you to explore Ledger Enterprise to discover tailored services that meet your organisational needs.</p>
            </div>
          )
 
        }
      ]
    },
    {
      title: "Managing Ledger Recover subscription",
      questions: [
        {
          question: "How and when can I cancel my Ledger Recover subscription?",
          answer: "You can cancel your subscription anytime. Access your Ledger Recover subscription homepage in My Ledger tab, and navigate to  Manage subscription -> Delete Ledger Recover login. You will receive an email with a link to unsubscribe. Please ensure that you have your Secret Recovery Phrase before canceling your subscription."
        },
        {
          question: "What happens if I stop paying my subscription?",
          answer: "If you don't update your payment info and pay the subscription within 7 days, you won't be able to restore your private keys using Ledger Recover. If you don't regularize your payment within 3 months, your subscription will be suspended. After your subscription is suspended, you have 9 months to contact Ledger Recover Support and reactivate your subscription. You will need to pay an administration fee of 50 EUR along with any outstanding balance."
        },
        {
          question: "How long is my Secret Recovery Phrase secured by Ledger Recover?",
          answer: "As long as you're subscribed to the service."
        },
        {
          question: "What payment methods are accepted?",
          answer: "Visa and MasterCard. Payments are settled in the currency of your country of residence. For example, if you're based in the United States, you will pay in the US dollar. In the event of a rejected payment, please contact your bank directly. For any other issues related to credit card payments, reach out to Ledger Recover Support."
        },
        {
          question: "What duties and taxes will I have to pay?",
          answer: "You may have VAT/GST or other taxes to pay depending on your country of residence."
        },
      ]
    },
    {
      title:'Setting up Ledger Recover',
      questions: [
        {
          question: "Is Ledger Recover available both on desktop and mobile?",
          answer: "With Ledger Nano X, Ledger Recover is available on the Ledger Live desktop and mobile app. With Ledger Nano S Plus, the service is available on desktop only."
        },
        {
          question: "Which documents are accepted for identity verification?",
          answer: "A passport/national identity card issued by the EU, the UK, Canada, and the US, or a driver's license issued in Canada or the US, is required to subscribe to the service."
        },
        {
          question: "What is the difference between Ledger Recover identity verification and KYC?",
          answer: "Ledger Recover is provided by Coincover. When you subscribe to the service, your Ledger device after your approval will encrypt the entropy of your Secret Recovery Phrase—a string of random 1s and 0s from which your Secret Recovery Phrase is computed. The encrypted entropy is fragmented into three pieces within the Secure Element chip. Your Ledger device will send the fragments to 3 separate and independent companies that will store them using Hardware Security Modules."
        },
        {
          question: "How can I delete my Ledger Recover login?",
          answer: "You first need to cancel your Ledger Recover subscription, and then your login will be automatically deleted."
        },
      ]
    },
    {
      title: "Managing Ledger Recover password",
      questions: [
        {
          question: "How can I update Ledger Recover password?",
          answer: "Log in to Ledger Recover to update your password."
        },
        {
          question: "I forgot my password. Can I reset it?",
          answer: "You can reset your password by clicking the Forgot password button on the login page or navigating to Manage subscription -> Send email to change password and following the instructions."
        },
      ]
    },
    {
      title: "Recovering access to your wallet",
      questions:[
        {
          question:"What if someone gets access to my wallet using Ledger Recover?",
          answer:"Ledger Recover comprises extensive identity verification processes—performed by Coincover within a secure environment built by Ledger. As an added layer of protection, subject to investigation, $50,000 compensation may be available from Coincover in the unlikely event that something were to go wrong.",
        },
        {
          question:"How many times per month/year can I try to recover access to my wallet?",
          answer:"You can try to recover access to your wallet up to 3 times per month and up to 10 times per year.",
        },
        {
          question:"Do I need a new Ledger device to recover access to my wallet?",
          answer:"Using a new device makes the process as safe as possible. Another option is to reset an already-used device to its factory settings.",
        },
        {
          question:"How can I recover access to my wallet?",
          answer:"The steps are as follows: - Get a new Ledger device. -Open the Ledger Live mobile app and navigate to My Ledger -> Ledger Recover. - Go through reasonable checks to verify your identity. - Follow the onscreen instructions.",
        },
        {
          question:"What is a One-Time Security Code?",
          answer:"One-Time Security Code provides an additional level of security to Ledger Recover. The code will be displayed on the Ledger device that you're using to recover access to your wallet. You'll be asked to provide the code during the identity verification process. If you can't provide the code, you'll need to start over. ⚠ Do not share or use the code in any other way. Only use a code that is displayed on your Ledger device.",
        }
      ]
    },
    {
      title: "Data & Privacy",
      questions:[
        {
        question:"Why do I need to provide my identity information to subscribe to Ledger Recover?",
        answer:"Ledger Recover uses ID verification because we believe in self-custody and individual autonomy. Unlike the full KYC process, ID verifications are less complicated and reveal only the necessary information.",
       },
       {
        question:"Does Ledger Recover store my personal data?",
        answer:"Your identity details are collected by Ledger Recover ID verification service providers. Coincover and Ledger store an encrypted excerpt of this data. Only authorized third parties have access to it. To learn more about how we collect and use this information, please read our Privacy Policy.",
       },
       {
        question:"Where can I find Ledger Recover Terms & Conditions?",
        answer:"You can find the Terms and Conditions here: Terms & Conditions",
       },
       {
        question:"How does Coincover handle formal subpoenas/warrants from governmental agencies under Ledger Recover?",
        answer:"You can find more information in Coincover FAQs.",
       }
      ]
    }
  ];

  export default sections;