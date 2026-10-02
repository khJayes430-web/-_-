const saveContact = document.getElementById("saveContact");
const toast = document.getElementById("toast");

saveContact.addEventListener("click", () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Kh Jayes
N:Jayes;Kh;;;
ORG:Independent Creator
TITLE:Photographer | Visual Creator | Digital Designer
URL:https://github.com/
END:VCARD`;

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Kh-Jayes.vcf";
  link.click();
  URL.revokeObjectURL(url);

  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
});

