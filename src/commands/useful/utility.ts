import { Message, EmbedBuilder } from "discord.js";
import { Command } from "../../lib/command";
import { safeSend } from "../safeSend";

export class ListCommand extends Command {
  regex = /!(ls|list)/;
  name = "!ls or !list";
  description = "Sends a small help menu with useful links and phone numbers.";

  async execute(msg: Message): Promise<void> {
    if (msg.channel?.isTextBased()) {
      await safeSend (msg.channel, { embeds: [this.cheatsheet] });
    }
  }

  cheatsheet = new EmbedBuilder()
    .setColor(0x442691)
    .setTitle("Helpful Links")
    .setThumbnail("https://i.imgur.com/NTcYRwQ.jpeg")
    .addFields(
      
      {
        name: "User Info",
        value:
          "[IT Tools](https://ittools.ucsd.edu) \
            | [MailUPD](https://mailupd.ucsd.edu) \
            | [SAL](https://sal.ucsd.edu/) \
            | [Google Admin](https://admin.google.com/) \
            | [ALTNG](https://altng.ucsd.edu/) \
            | [DSA Email Lookup](https://iam.ucsd.edu/dsasearch/dsaSearchByEmail) \
            | [DSA Dept Lookup](https://iam.ucsd.edu/dsasearch/deptList) \
            | [Lastpass Admin](https://admin.lastpass.com/) \
            | [Zoom Admin](https://ucsd.zoom.us/account/user#/) \
            | [Blink Directory](https://itsweb.ucsd.edu/directory/)",
      },
      {
        name: "Education",
        value:
          "[Classroom Calls](https://ucsdcollab.atlassian.net/wiki/spaces/CKB/pages/13116030/Responding+to+Classroom+Support+Calls) \
            | [GA Classrooms](https://ucsdcollab.atlassian.net/wiki/spaces/CKB/pages/306053141/General+Assignment+Campus+Classroom+Information+ITS-ClassroomSupport+v2023) \
            | [Classroom Lookup](https://ucsd-its-sd.github.io/icl_web/) \
            | [Classroom Map](https://sheeptester.github.io/uxdy/classrooms/) \
            | [Podcast Info](https://podcast.ucsd.edu/info/),"
      },
      {
        name: "Labs",
        value: 
          "[Lab Lookup](https://lablookup.ucsd.edu/) \
            | [Lab Software](https://its-key-srv.ucsd.edu/software) \
            | [ITS-EIS](https://ucsdcollab.atlassian.net/wiki/spaces/CKB/pages/13114104/ITS+Educational+Infrastructure+Systems+formerly+ITS+Educational+Computing+Environments) \
            | [EIS Labs](https://docs.google.com/spreadsheets/d/1oa8SYsrBxflwqXxHj8NwHQnL4aRIpCs4RSNyTYQZTCQ) \
            | [CINFO](https://cinfo.ucsd.edu/)",
      },
      {
        name: "Security",
        value: 
          "[Duo Admin](https://admin-ce13a1a7.duosecurity.com/) \
            | [Duo Admin(Health)](https://admin-5d6fd827.duosecurity.com/) \
            | [Starfish](https://kona.ucsd.edu/starfish) \
            | [Virus Total](https://www.virustotal.com/) \
            | [Border Block](https://netapps-web2.ucsd.edu/secure/blocked-hosts/search.pl)",
      },
      {
        name: "Wireless",
        value:
          "[Cisco ISE](https://m-ise-admin.ucsd.edu/) \
            | [DNAC](https://its-dnac.ucsd.edu/dna/home) \
            | [Campus Devices](https://netapps-web.ucsd.edu/secure/etherreg/wirelessform.pl) \
            | [ResNet Devices](https://mydevices.ucsd.edu/) \
            | [IP Space](https://ucsdcollab.atlassian.net/wiki/spaces/TWT/pages/17072885/IPspace)",
      },
      {
        name: "Wired",
        value: 
          "[Hostmaint](https://hostmaint.ucsd.edu/ui/) \
            | [NetMRI](https://act-netmri.ucsd.edu/) \
            | [Splunk](https://its-splunk.ucsd.edu/) \
            | [AprQ](https://netapps-web.ucsd.edu/secure/tools/arpq) \
            | [Intermapper](https://intermapper.ucsd.edu/)",
      },
      {
        name: "Telecom",
        value: 
          "[CSR Form](https://act.ucsd.edu/telecom/csr) \
            | [CSR Status](https://act.ucsd.edu/telecom/csr/status) \
            | [TMS Instructions](https://ucsdcollab.atlassian.net/wiki/spaces/CKB/pages/13114689/TMS+ITS-InstallationRepair) \
            | [TMS Search](https://actfp.ucsd.edu/secure/TMS_module/tms_module.pl) \
            | [Phone Switch](https://ucsdcollab.atlassian.net/wiki/spaces/CKB/pages/13114110/Phone+Switch)",
      },
      {
        name: "Service Desk",
        value:
          "[Collab](https://ucsdcollab.atlassian.net/wiki/spaces/CKB/overview) \
            | [Talkdesk](https://ucsd-its-sd.mytalkdesk.com/) \
            | [Status Page](https://status.ucsd.edu/) \
            | [When I Work](https://appx.wheniwork.com/) \
            | [Ecotime](https://ecotimecampus.ucsd.edu/)",
      },      

      {
        name: "Ticket Assignment",
        value: 
          "[SNOW Assignment Groups](https://ucsdcollab.atlassian.net/wiki/spaces/CKB/pages/939426109/SNOW+Assignment+Groups+formerly+ITS+Business+Units) \
            | [Health Support Matrix](https://ucsdcollab.atlassian.net/wiki/spaces/CKB/pages/13115634/Health+Information+Services+HIS+and+ITS+Support+Matrix+for+Customers+in+the+Healthcare+OU) \
            | [Field Support Users](https://ucsdcollab.atlassian.net/wiki/spaces/CKB/pages/13114950/Groups+Supported+by+Field+Support) \
            | [Phone Template](https://ucsdcollab.atlassian.net/wiki/spaces/CKB/pages/13114270/Phone+Response+Template) \
            | [Email Templates](https://ucsdcollab.atlassian.net/wiki/spaces/CKB/pages/230786164/Email+Templates+Canned+Responses)",
      },
      {
        name: "Health Numbers",
        value:
          "Normal Number: (619) 543-4357 \nINTERNAL Number (skips queue, do not give to customers): (619) 543-4747",
      },
      {
        name: "Other Numbers",
        value:
          "Service Desk: (858) 246-4357 \
            \nClassroom: (858) 534-5784 \
            \nEdtech: (858) 822-3315 \
            \nCustomer Service: (858) 534-4277 \
            \nFacilities Management Urgent Number: (858) 534-2930",
      },
    );
}
