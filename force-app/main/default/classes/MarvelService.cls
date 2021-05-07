public with sharing class MarvelService {
    private string privateKeya {get;set;}
    private string publicKeya {get;set;}

    MarvelService(){
        this.privateKeya = 'b4912920498efe76dd8bef612cfc9cd4110300d6';
        this.publicKeya = 'a9308e900f6fa3b62903f4086a57ddbf';
    }

    @AuraEnabled(cacheable=true)
    public static string getToken(){
        String privateKey = 'b4912920498efe76dd8bef612cfc9cd4110300d6';
        String publicKey = 'a9308e900f6fa3b62903f4086a57ddbf';
        Long ts = Datetime.now().millisecond();
        String hash = EncodingUtil.convertToHex(Crypto.generateDigest('MD5', Blob.valueOf(String.valueOf(ts) + privateKey + publicKey)));
        return 'ts=' + String.valueOf(ts) + '&apikey=' + publicKey + '&hash=' + hash;
    }

}
