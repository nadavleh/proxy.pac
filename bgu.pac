var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function FindProxyForURL(url, host)
{
        if (url.substring(0, 4) == "ftp:") 
            return "DIRECT";
	else if (isPlainHostName(host) ||
            shExpMatch(host, "*folklore.org.il") ||
            dnsDomainIs(host, "www.hotelmanagers.org") ||
            dnsDomainIs(host, "www.isrp.org.il") ||
            dnsDomainIs(host, ".bgu.ac.il") ||
            shExpMatch(host,"192.117.163.163") ||
            shExpMatch(host,"192.117.163.164") ||
            dnsDomainIs(host, ".games.snv.yahoo.com"))
	    return "DIRECT";
        else if (isInNet(host, "132.72.0.0", "255.255.0.0") ||
                 isInNet(host, "132.73.0.0", "255.255.0.0")) 
            return "DIRECT"; 
	else if (dnsDomainIs(host, ".emboj.org") ||
                 dnsDomainIs(host, "muse.jhu.edu") ||
                 dnsDomainIs(host, ".jstor.org") ||
                 dnsDomainIs(host, ".ams.org") ||
                 dnsDomainIs(host, ".libnet.ac.il") ||
                 dnsDomainIs(host, "libnet.ac.il") ||
                 dnsDomainIs(host, "direct.orange.co.il") ||
                 dnsDomainIs(host, "libnet1.ac.il") ||
                 dnsDomainIs(host, "www.idealibrary.com") ||
                 dnsDomainIs(host, "seminars.wolfram.com") ||
                 dnsDomainIs(host, "www.europe.idealibrary.com") ||
                 dnsDomainIs(host, ".isiglobalnet.com") ||
                 dnsDomainIs(host, ".software.ibm.com") ||
                 dnsDomainIs(host, "www.sciencenow.org") ||
                 dnsDomainIs(host, "www.emerald-library.com") ||
                 dnsDomainIs(host, ".emeraldinsight.com") ||
                 dnsDomainIs(host, ".oclc.org") ||
                 dnsDomainIs(host, ".chadwyck.com") ||
                 dnsDomainIs(host, ".chadwyck.co.uk") ||
                 dnsDomainIs(host, ".oup.co.uk") ||
                 dnsDomainIs(host, ".cas.org") ||
                 dnsDomainIs(host, ".fiz.karlsruhe.de") ||
                 dnsDomainIs(host, ".lexis-nexis.com") ||
                 dnsDomainIs(host, ".lexisnexis.com") ||
                 dnsDomainIs(host, ".lexisnexis.co.il") ||
                 dnsDomainIs(host, "oas.highwire.org") ||
                 dnsDomainIs(host, ".sciencemag.org") ||
                 dnsDomainIs(host, "eoweb.dlr.de") ||
                 dnsDomainIs(host, ".sciencedirect.com") ||
                 dnsDomainIs(host, ".njp.org") ||
                 dnsDomainIs(host, ".siam.org") ||
                 dnsDomainIs(host, ".edpsciences.com") ||
                 dnsDomainIs(host, ".iop.org") ||
                 dnsDomainIs(host, "www.springerlink.com") ||
                 dnsDomainIs(host, "link.springer.de") ||
                 dnsDomainIs(host, "link.springer-ny.com") ||
                 dnsDomainIs(host, ".academicpress.com") ||
                 dnsDomainIs(host, "www.apnet.com") ||
                 dnsDomainIs(host, "www.europe.apnet.com") ||
                 dnsDomainIs(host, ".wkap.nl") ||
                 dnsDomainIs(host, "pubs.acs.org") ||
                 dnsDomainIs(host, "checkvendor.ilevel.com") ||
                 shExpMatch(host,"208.228.158.133") ||
                 shExpMatch(host,"193.49.43.2") ||
                 shExpMatch(host,"217.154.120.6") ||
                 shExpMatch(host,"80.179.48.194") ||
                 shExpMatch(host,"54.254.103.93") ||
                 dnsDomainIs(host, ".aip.org") ||
                 dnsDomainIs(host, "www.cell.com") ||
                 dnsDomainIs(host, "www.neuron.org") ||
                 dnsDomainIs(host, "www.immunity.com") ||
                 dnsDomainIs(host, "www.molecule.org") ||
                 dnsDomainIs(host, ".gale.com") ||
                 dnsDomainIs(host, ".galegroup.com") ||
                 dnsDomainIs(host, ".psmedia.com") ||
                 dnsDomainIs(host, ".iacnet.com") ||
                 dnsDomainIs(host, "www.computer-select.com") ||
                 dnsDomainIs(host, ".abc-clio.com") ||
                 dnsDomainIs(host, ".bschool-investext.com") ||
                 dnsDomainIs(host, ".wiley.com") ||
                 dnsDomainIs(host, ".catchword.com") ||
                 dnsDomainIs(host, ".ingenta.com") ||
                 dnsDomainIs(host, ".csa.com") ||
                 dnsDomainIs(host, ".csa2.com") ||
                 dnsDomainIs(host, ".asme.org") ||
                 dnsDomainIs(host, "access.libri.ch") ||
                 dnsDomainIs(host, "www.journals.uchicago.edu") ||
                 dnsDomainIs(host, ".karger.com") ||
                 dnsDomainIs(host, "ulrichsweb.serialssolutions.com") ||
                 dnsDomainIs(host, ".booksinprint.com") ||
                 dnsDomainIs(host, "www.swetsnetnavigator.nl") ||
                 dnsDomainIs(host, ".bowker.com") ||
                 dnsDomainIs(host, ".itknowledge.com") ||
                 dnsDomainIs(host, "dictionary.oed.com") ||
                 dnsDomainIs(host, ".oupjournals.org") ||
                 dnsDomainIs(host, ".blackwell-synergy.com") ||
                 dnsDomainIs(host, "journals.iucr.org") ||
                 dnsDomainIs(host, "backissues.iucr.org") ||
                 isInNet(host, "198.112.169.0", "255.255.255.0") ||
                 dnsDomainIs(host, "www.biochemj.org") ||
                 dnsDomainIs(host, "www.wwp.brown.edu") ||
                 dnsDomainIs(host, ".ebsco.com") ||
                 dnsDomainIs(host, ".ebscohost.com") || 
                 dnsDomainIs(host, ".ebsco-content.com") || 
                 dnsDomainIs(host, ".epnet.com") || 
                 dnsDomainIs(host, ".globalbooksinprint.com") ||
                 dnsDomainIs(host, ".bas.umdl.umich.edu") ||
                 dnsDomainIs(host, ".AnnualReviews.org") ||
                 dnsDomainIs(host, "www.developmentalcell.com") ||
                 dnsDomainIs(host, ".hwwilsonweb.com") ||
                 dnsDomainIs(host, "www.current-biology.com") ||
                 dnsDomainIs(host, "www.structure.org") ||
                 dnsDomainIs(host, ".annualreviews.org") ||
                 dnsDomainIs(host, ".brepolis.net") ||
                 dnsDomainIs(host, "www.genesdev.org") ||
                 dnsDomainIs(host, "www.swetsnavigator.com") ||
                 dnsDomainIs(host, "www.swetsnavigator.nl") ||
                 dnsDomainIs(host, "www.libri.ch") ||
                 dnsDomainIs(host, "inisdb.iaea.org") ||
                 dnsDomainIs(host, "www.oxfordreference.com") ||
                 dnsDomainIs(host, ".cdisys.com") ||
                 dnsDomainIs(host, ".takdinet.co.il") ||
                 dnsDomainIs(host, ".images.md") ||
                 dnsDomainIs(host, ".ukro.ac.uk") ||
                 dnsDomainIs(host, "webspirs.ziur.co.il") ||
                 dnsDomainIs(host, "www.ziur.co.il") ||
                 dnsDomainIs(host, ".kluweronline.com") ||
                 dnsDomainIs(host, ".lwwonline.com") ||
                 dnsDomainIs(host, ".worldoflearning.com") ||
                 dnsDomainIs(host, ".naturesj.com") ||
                 dnsDomainIs(host, ".nature.com") ||
                 dnsDomainIs(host, "www.cancercell.org") ||
                 dnsDomainIs(host, ".epnet.com") ||
                 dnsDomainIs(host, ".silverplatter.com") ||
                 dnsDomainIs(host, ".library.utoronto.ca") ||
                 dnsDomainIs(host, "www.itergateway.org") ||
                 dnsDomainIs(host, ".hebrew-bibliography.com") ||
                 dnsDomainIs(host, ".tdnet.com") ||
                 dnsDomainIs(host, "isiknowledge.com") ||
                 dnsDomainIs(host, ".isiknowledge.com") ||
                 dnsDomainIs(host, ".webofknowledge.com") ||
                 dnsDomainIs(host, ".webofscience.com") ||
                 dnsDomainIs(host, ".aps.org") ||
                 dnsDomainIs(host, ".cepr.org") ||
                 dnsDomainIs(host, ".engineeringvillage2.org") ||
                 dnsDomainIs(host, ".engineeringvillage.com") ||
                 dnsDomainIs(host, "www.swetswise.com") ||
                 dnsDomainIs(host, ".cambridge.org") ||
                 dnsDomainIs(host, "webstats.kluweronline.com") ||
                 dnsDomainIs(host, "surfaid10.dfw.ibm.com") ||
                 dnsDomainIs(host, "www.new.ans.org") ||
                 dnsDomainIs(host, ".plantcell.org") ||
                 dnsDomainIs(host, ".plantphysiol.org") ||
                 dnsDomainIs(host, "ptp.ipap.jp") ||
                 dnsDomainIs(host, "portal.acm.org") ||
                 dnsDomainIs(host, ".rsc.org") ||
                 dnsDomainIs(host, "www.osapublishing.org") ||
                 dnsDomainIs(host, ".osa.org") ||
                 dnsDomainIs(host, "www.ei.org") ||
                 dnsDomainIs(host, "www.nature.com") ||
                 dnsDomainIs(host, ".kluwerlawonline.com") ||
                 dnsDomainIs(host, ".rdsinc.com") ||
                 dnsDomainIs(host, "wos.isiglobalnet.com") ||
                 dnsDomainIs(host, "www.IterGateway.org") ||
                 dnsDomainIs(host, "www.wkap.nl") ||
                 dnsDomainIs(host, "www.turpion.org") ||
                 dnsDomainIs(host, "classweb.loc.gov") ||
                 dnsDomainIs(host, "www.sgmjournals.org") ||
                 dnsDomainIs(host, "www.sme.org") ||
		 dnsDomainIs(host, "www.ieee.org") ||
		 dnsDomainIs(host, ".worldbank.org") ||
		 dnsDomainIs(host, "ieeexplore.ieee.org") ||
		 dnsDomainIs(host, ".bioone.org") ||
		 dnsDomainIs(host, "www.evolutionary-ecology.com") ||
		 dnsDomainIs(host, "dippr.byu.edu") ||
		 dnsDomainIs(host, "dexa.faw.uni-linz.ac.at") ||
		 dnsDomainIs(host, "bioinf.cs.ucl.ac.uk") ||
                 dnsDomainIs(host, "www.ondisc.co.il") ||
                 dnsDomainIs(host, "www.bookfindonline.com") ||
                 dnsDomainIs(host, ".ovid.com") ||
                 dnsDomainIs(host, ".fhcrc.org") ||
                 dnsDomainIs(host, "springerlink.metapress.com") ||
                 dnsDomainIs(host, ".oxfordjournals.org") ||
                 dnsDomainIs(host, ".jneurosci.org") ||
                 dnsDomainIs(host, "alt3.csa3.com") || 
                 dnsDomainIs(host, "nt-server.unisi.it") || 
                 dnsDomainIs(host, "techmvs.technion.ac.il") || 
                 dnsDomainIs(host, "cs.uvm.edu") || 
                 dnsDomainIs(host, ".mdconsult.com")  || 
                 dnsDomainIs(host, ".geoscienceworld.org") || 
                 dnsDomainIs(host, "xxx.tau.ac.il")  || 
                 dnsDomainIs(host, "authors.aps.org") || 
                 dnsDomainIs(host, "linksolver.ovid.com") || 
                 dnsDomainIs(host, "lib.mexmat.ru") || 
                 dnsDomainIs(host, ".pnas.org") || 
                 dnsDomainIs(host, "home.mdconsult.com") || 
                 dnsDomainIs(host, "search.epnet.com") || 
                 dnsDomainIs(host, "www.sbp-journal.com") || 
                 dnsDomainIs(host, "pao.chadwyck.co.uk") || 
                 dnsDomainIs(host, "www.leisuretourism.com") || 
                 dnsDomainIs(host, "www.igi-online.com") || 
                 dnsDomainIs(host, "hebrew-treasures.huji.ac.il") || 
                 dnsDomainIs(host, "www.otzar.org") || 
                 dnsDomainIs(host, "www.annee-philologique.com") || 
                 dnsDomainIs(host, "www.liebertonline.com") || 
                 dnsDomainIs(host, "stephanus.tlg.uci.edu") || 
                 dnsDomainIs(host, ".umi.com") || 
                 dnsDomainIs(host, "www.missim.com") || 
                 dnsDomainIs(host, "projecteuclid.org") || 
                 dnsDomainIs(host, "home.mdconsult.com") || 
                 dnsDomainIs(host, "cancerres.aacrjournals.org") || 
                 dnsDomainIs(host, "infoweb.newsbank.com") || 
                 dnsDomainIs(host, "enriqueta.man.ac.uk") || 
                 dnsDomainIs(host, "takdin.co.il") || 
                 dnsDomainIs(host, "www.takdin.co.il") || 
                 dnsDomainIs(host, "infoweb.newsbank.com") || 
                 dnsDomainIs(host, "quod.lib.umich.edu") || 
                 dnsDomainIs(host, ".informaworld.com") || 
                 dnsDomainIs(host, ".sagepub.com") || 
                 dnsDomainIs(host, "geobase.huji.ac.il") || 
                 dnsDomainIs(host, ".responsa.co.il") || 
                 dnsDomainIs(host, ".oxforddnb.com") || 
                 dnsDomainIs(host, ".nisc.com") || 
                 dnsDomainIs(host, "psycnet.apa.org") || 
                 dnsDomainIs(host, ".encislam.brill.nl") || 
                 dnsDomainIs(host, ".refworks.com") || 
                 dnsDomainIs(host, ".ravmilim.co.il") || 
                 dnsDomainIs(host, ".hstalks.com") ||                                              
                 dnsDomainIs(host, ".ama-assn.org") ||
                 dnsDomainIs(host, ".nist.gov") ||
                 dnsDomainIs(host, ".cshlp.org") || 
                 dnsDomainIs(host, ".scopus.com") || 
                 dnsDomainIs(host, ".nejm.org") || 
                 dnsDomainIs(host, "brillonline.nl") || 
                 dnsDomainIs(host, ".eastview.com") || 
                 dnsDomainIs(host, ".alexanderstreet.com") || 
                 dnsDomainIs(host, "www.netlibrary.com") || 
                 dnsDomainIs(host, "www.accessmedicine.com") || 
                 dnsDomainIs(host, ".alexanderstreet.com")  || 
                 dnsDomainIs(host, ".medicalevidencematters.com")  || 
                 dnsDomainIs(host, "www.netlibrary.com") || 
                 dnsDomainIs(host, "www.worldscinet.com")  || 
                 dnsDomainIs(host, "ebooks.worldscinet.com") || 
                 dnsDomainIs(host, "www.statistical-datasets.com") || 
                 dnsDomainIs(host, ".bmj.com") || 
                 dnsDomainIs(host, "www.search.eb.com") || 
                 dnsDomainIs(host, ".britannica.com") || 
                 dnsDomainIs(host, "www.eiu.com") || 
                 dnsDomainIs(host, "site.ebrary.com") || 
                 dnsDomainIs(host, ".asminternational.org") || 
                 dnsDomainIs(host, "wileyonlinelibrary.com") || 
                 dnsDomainIs(host, "www.mastax.co.il") || 
                 dnsDomainIs(host, "www.portal.euromonitor.com") || 
                 dnsDomainIs(host, ".jaaos.org") || 
                 dnsDomainIs(host, ".proquest.com") || 
                 dnsDomainIs(host, "www.oed.com") || 
                 dnsDomainIs(host, "glcfapp.glcf.umd.edu") || 
                 dnsDomainIs(host, "lib.haifa.ac.il") || 
                 dnsDomainIs(host, "primofe.haifa.ac.il") || 
                 dnsDomainIs(host, "www.myendnoteweb.com") || 
                 dnsDomainIs(host, "bgu.summon.serialssolutions.com") || 
                 dnsDomainIs(host, "www.reaxys.com") || 
                 dnsDomainIs(host, "ctiv.alexanderstreet.com") || 
                 dnsDomainIs(host, "taml.aip.org") || 
                 dnsDomainIs(host, "www.scopus.com") || 
                 dnsDomainIs(host, "informahealthcare.com") || 
                 dnsDomainIs(host, "ascelibrary.org") || 
                 dnsDomainIs(host, "ihp.haifa.ac.il") || 
                 dnsDomainIs(host, "www.datamonitor.com") || 
                 dnsDomainIs(host, "www.nowpublishers.com") || 
                 dnsDomainIs(host, "parlipapers.chadwyck.co.uk") || 
                 dnsDomainIs(host, "janes.ihs.com") || 
                 dnsDomainIs(host, "ebooks.thieme.com")  || 
                 dnsDomainIs(host, "www.thieme-connect.com")  || 
                 dnsDomainIs(host, "www.thiemeteachingassistant") || 
                 dnsDomainIs(host, "www.oecd-ilibrary.org")  || 
                 dnsDomainIs(host, "dx.doi.org") || 
                 dnsDomainIs(host, "www.ajsonline.org") || 
                 dnsDomainIs(host, "www.zentralblatt-math.org") || 
                 dnsDomainIs(host, "www.kotar.co.il") || 
                 dnsDomainIs(host, "online2.ibfd.org") || 
                 dnsDomainIs(host, "www.ima.org.il") || 
                 dnsDomainIs(host, "www.thomsonhc.com") || 
                 dnsDomainIs(host, "naturaldatabase.therapeuticresearch.com") || 
                 dnsDomainIs(host, "www.lieberman-institute.com") || 
                 dnsDomainIs(host, "www.jewishreviewofbooks.com") || 
                 dnsDomainIs(host, ".brillonline.com") || 
                 dnsDomainIs(host, "arabworldgeographer.metapress.com") || 
                 dnsDomainIs(host, "www.embase.com")  || 
                 dnsDomainIs(host, "cognet.mit.edu")  || 
                 dnsDomainIs(host, "www.essentialevidenceplus.com") || 
                 dnsDomainIs(host, "dl.acm.org") || 
                 dnsDomainIs(host, "www.nevo.co.il") || 
                 dnsDomainIs(host, "www.schattauer.de") || 
                 dnsDomainIs(host, ".ahajournals.org") || 
                 dnsDomainIs(host, "www.dmphp.org") || 
                 dnsDomainIs(host, "scholar.google.com")  || 
                 dnsDomainIs(host, "scholar.google.co.il") || 
                 dnsDomainIs(host, "www.info2011.szold.org.il") || 
                 dnsDomainIs(host, "arthritis-research.com")  || 
                 dnsDomainIs(host, "alzres.com")  || 
                 dnsDomainIs(host, "stemcellres.com")  || 
                 dnsDomainIs(host, "breast-cancer-research.com")  || 
                 dnsDomainIs(host, "ccforum.com")  || 
                 dnsDomainIs(host, "genomemedicine.com")  || 
                 dnsDomainIs(host, "genomebiology.com")  || 
                 dnsDomainIs(host, "www.biologyimagelibrary.com") || 
                 dnsDomainIs(host, ".artstor.org") || 
                 dnsDomainIs(host, "refworks.reference-global.com")  || 
                 dnsDomainIs(host, "db.saur.de") || 
                 dnsDomainIs(host, "jamanetwork.com") || 
                 dnsDomainIs(host, "lb.brillonline.nl") || 
                 dnsDomainIs(host, "ajp.psychiatryonline.org") || 
                 dnsDomainIs(host, ".hosted.exlibrisgroup.com") || 
                 dnsDomainIs(host, "msp.warwick.ac.uk")  || 
                 dnsDomainIs(host, "msp.org") || 
                 dnsDomainIs(host, "www.degruyter.com") || 
                 dnsDomainIs(host, "online.liebertpub.com") || 
                 dnsDomainIs(host, "www.school.kotar.co.il") || 
                 dnsDomainIs(host, ".spiedigitallibrary.org") || 
                 dnsDomainIs(host, ".aspetjournals.org") || 
                 dnsDomainIs(host, "journal.publications.chestnet.org") || 
                 dnsDomainIs(host, "www.micromedexsolutions.com") || 
                 dnsDomainIs(host, "jcem.endojournals.org") || 
                 dnsDomainIs(host, ".amdigital.co.uk") || 
                 dnsDomainIs(host, "www.healthcare.co.il") || 
                 dnsDomainIs(host, "www.tcrecord.org") || 
                 dnsDomainIs(host, "www.oxfordbibliographies.com") || 
                 dnsDomainIs(host, "www.jove.com") || 
                 dnsDomainIs(host, "www.landesbioscience.com") || 
                 dnsDomainIs(host, "elsevierelibrary.co.uk") || 
                 dnsDomainIs(host, ".asm.org") || 
                 dnsDomainIs(host, "www.tandfonline.com") || 
                 dnsDomainIs(host, "www.britishonlinearchives.co.uk") || 
                 dnsDomainIs(host, "lieberman-index.org") || 
                 dnsDomainIs(host, "www.routledgeonline.com") || 
                 dnsDomainIs(host, "www.morganclaypool.com") || 
                 dnsDomainIs(host, "www.oxfordmedicine.com") || 
                 dnsDomainIs(host, "accessmedicine.mhmedical.com") || 
                 dnsDomainIs(host, "www.crcnetbase.com") || 
                 dnsDomainIs(host, "www.churchillarchive.com") || 
                 dnsDomainIs(host, "www.tandfebooks.com") || 
                 dnsDomainIs(host, "www.europaworld.com") || 
                 dnsDomainIs(host, "www.paramedicpractice.com") || 
                 dnsDomainIs(host, "wms.cartographic.com")  || 
                 dnsDomainIs(host, "www.fehrestcom.com") || 
                 dnsDomainIs(host, "clinicalaccess.mhmedical.com") || 
                 dnsDomainIs(host, "www.aanda.org") || 
                 dnsDomainIs(host, "www.clinchem.org")  || 
                 dnsDomainIs(host, "www.molbiolcell.org")  || 
                 dnsDomainIs(host, ".endocrinology-journals.org")  || 
                 dnsDomainIs(host, "www.eje-online.org")  || 
                 dnsDomainIs(host, "www.reproduction-online.org")  || 
                 dnsDomainIs(host, "dev.biologists.org")  || 
                 dnsDomainIs(host, "erm.ersjournals.com")  || 
                 dnsDomainIs(host, ".rcpsych.org")  || 
                 dnsDomainIs(host, "www.biolreprod.org")  || 
                 dnsDomainIs(host, "tech.snmjournals.org") || 
                 dnsDomainIs(host, "bysnursingskills.com")  || 
                 dnsDomainIs(host, "www.nursingconsult.com") || 
                 dnsDomainIs(host, "www.magonlinelibrary.com") || 
                 dnsDomainIs(host, "batesvisualguide.com") || 
                 dnsDomainIs(host, "manchester.metapress.com") || 
                 dnsDomainIs(host, "dlib.eastview.com") || 
                 dnsDomainIs(host, "thebmj.com") || 
                 dnsDomainIs(host, "www.envplan.com") || 
                 dnsDomainIs(host, "www.urbanform.org") || 
                 dnsDomainIs(host, "www.elibrary.imf.org") || 
                 dnsDomainIs(host, "www.groveart.com")  || 
                 dnsDomainIs(host, "www.oxfordartonline.com") || 
                 dnsDomainIs(host, "www.dictionaryofeconomics.com") || 
                 dnsDomainIs(host, "pradn.com")  || 
                 dnsDomainIs(host, "www.sociologyencyclopedia.com") || 
                 dnsDomainIs(host, "www.psychiatrist.com") || 
                 dnsDomainIs(host, "publicculture.dukejournals.org") || 
                 dnsDomainIs(host, "www.ems-ph.org") || 
                 dnsDomainIs(host, "www.academicpublishing.org")  || 
                 dnsDomainIs(host, "www.palgrave-journals.com")  || 
                 dnsDomainIs(host, "www.intellectbooks.co.uk")  || 
                 dnsDomainIs(host, "www.mitpressjournals.org")  || 
                 dnsDomainIs(host, ".ingentaconnect.com")  || 
                 dnsDomainIs(host, "www.euppublishing.com")  || 
                 dnsDomainIs(host, "www.humanityjournal.org")  || 
                 dnsDomainIs(host, "www.v-r.de")  || 
                 dnsDomainIs(host, "www.levantine-journal.org")  || 
                 dnsDomainIs(host, "ipra.ua.ac.be")  || 
                 dnsDomainIs(host, "ejournals.duncker-humblot.de") || 
                 dnsDomainIs(host, "bloodjournal.org")  || 
                 dnsDomainIs(host, "signin.hematology.org") || 
                 dnsDomainIs(host, "onlinelibrary.wiley.com") || 
                 dnsDomainIs(host, "folkmasa.org") || 
                 dnsDomainIs(host, "academic.eb.com") || 
                 dnsDomainIs(host, "www.birpublications.org") || 
                 dnsDomainIs(host, "www.igi-global.com") || 
                 dnsDomainIs(host, "arkyves.org") || 
                 dnsDomainIs(host, "arabdictionary.huji.ac.il") || 
                 dnsDomainIs(host, "www.loebclassics.com") || 
                 dnsDomainIs(host, ".gejlibrary.com") || 
                 dnsDomainIs(host, "www.clinicalkey.com") || 
                 dnsDomainIs(host, ".springer.com") || 
                 dnsDomainIs(host, "thejns.org") || 
                 dnsDomainIs(host, "digger.ifat.com") || 
                 dnsDomainIs(host, "www.maneyonline.com") || 
                 dnsDomainIs(host, ".astm.org") || 
                 dnsDomainIs(host, "www.routledgehandbooks.com") || 
                 dnsDomainIs(host, "app.knovel.com") || 
                 dnsDomainIs(host, ".magnespress.co.il") || 
                 dnsDomainIs(host, ".nexis.com") || 
                 dnsDomainIs(host, "pubs.rsna.org") || 
                 dnsDomainIs(host, "www.oxfordclinicalpsych.com")  || 
                 dnsDomainIs(host, "www.referencecorp.com") || 
                 dnsDomainIs(host, "peeters-leuven.be") || 
                 dnsDomainIs(host, "bgu.tdnetdiscover.com") || 
                 dnsDomainIs(host, ".incites.thomsonreuters.com") || 
                 dnsDomainIs(host, "go.galegroup.com") || 
                 dnsDomainIs(host, "annals.org") || 
                 dnsDomainIs(host, "www.psychotherapy.net") || 
                 dnsDomainIs(host, "arabworldgeographer.org") || 
                 dnsDomainIs(host, "www.dramaonlinelibrary.com") || 
                 dnsDomainIs(host, "www.dawsonera.com") || 
                 dnsDomainIs(host, ".ncbi.nlm.nih.gov") || 
                 dnsDomainIs(host, "www.lrb.co.uk") || 
                 dnsDomainIs(host, "newleftreview.org") || 
                 dnsDomainIs(host, "www.englishhistoricaldocuments.com") || 
                 dnsDomainIs(host, ".dynamed.com") || 
                 dnsDomainIs(host, "toledot-online.mohr.de") || 
                 dnsDomainIs(host, "emboj.embopress.org") || 
                 dnsDomainIs(host, "browzine.com") || 
                 dnsDomainIs(host, "www.jbc.org") || 
                 dnsDomainIs(host, "pediatrics.aappublications.org") || 
                 dnsDomainIs(host, "ahainst.ipublishcentral.com") || 
                 shExpMatch(host,"62.219.113.155") ||
                 dnsDomainIs(host, "www.gseresearch.com") || 
                 dnsDomainIs(host, "www.oxfordbiblicalstudies.com") || 
                 dnsDomainIs(host, "classics.oxfordre.com") || 
                 dnsDomainIs(host, "www.geofacets.com") || 
                 dnsDomainIs(host, "online.liverpooluniversitypress.co.uk") || 
                 dnsDomainIs(host, "archive.irishnewsarchive.com")  || 
                 dnsDomainIs(host, "www.irishnewsarchives.com") || 
                 dnsDomainIs(host, "www.bloomsburycollections.com")  || 
                 dnsDomainIs(host, "www.emeraldgrouppublishing.com")  || 
                 dnsDomainIs(host, "heinonline.org")  || 
                 dnsDomainIs(host, "global.oup.com")  || 
                 dnsDomainIs(host, "proquest.safaribooksonline.com")  || 
                 dnsDomainIs(host, "royalsociety.org")  || 
                 dnsDomainIs(host, "vha.usc.edu") || 
                 dnsDomainIs(host, "www.jjs-online.net") || 
                 dnsDomainIs(host, "aip.scitation.org") || 
                 dnsDomainIs(host, "academic.oup.com") || 
                 dnsDomainIs(host, "online.statref.com") || 
                 dnsDomainIs(host, "www.aeaweb.org") || 
                 dnsDomainIs(host, "www.jrheum.com") || 
                 dnsDomainIs(host, "www.ronen-missim.co.il") || 
                 dnsDomainIs(host, "bgufin.bgu.ac.il") || 
                 dnsDomainIs(host, "www.wileyactual.com") || 
                 dnsDomainIs(host, "www.haaretz.co.il") || 
                 dnsDomainIs(host, "read.dukeupress.edu") || 
                 dnsDomainIs(host, "www.upress.virginia.edu"))
	         return "PROXY 132.72.138.1:8081";
 	else if (isInNet(myIpAddress(),"194.90.37.0","255.255.255.0"))
                return "DIRECT";
 	else if (isInNet(myIpAddress(),"194.90.167.0","255.255.255.0"))
                return "DIRECT";
	return "DIRECT";
}


}
/*
     FILE ARCHIVED ON 21:58:10 Feb 03, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:08:40 Feb 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 597.594
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.063
  cdx.remote: 0.055
  esindex: 0.008
  LoadShardBlock: 571.98 (3)
  PetaboxLoader3.datanode: 611.779 (7)
  CDXLines.iter: 13.615 (3)
  load_resource: 165.369 (2)
  PetaboxLoader3.resolve: 25.143
  loaddict: 90.095 (2)
*/