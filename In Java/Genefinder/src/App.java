public class App {
    public static void main(String[] args){
        String DNA = "AAATGCCCTAACTAGATTAAGAAACC";
        System.out.println(Findgene(DNA.toLowerCase()));
    }
	public static int findStopoCodon(String dna,int StartIndex,String StopCodon){
		int n = StartIndex;
		while((dna.length()-StartIndex)!=n){
			if (dna.substring(n,n+2)==StopCodon){
				return n;
			}
			n+=3;
		}
		return -1;
	}
	public static String testFindStopCodon(String dna){


        int start = dna.indexOf("atg");
		if (start == -1) {
			return "";
		}
		int stop = dna.indexOf("taa", start+3);
		while(stop != -1){
			 if ((stop - start) % 3 == 0) {
			return dna.substring(start, stop+3);
			}
			else {
				stop = dna.indexOf("taa", (stop + 1));

			}
		}
		return "No valid gene";
    }
}