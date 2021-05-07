public with sharing class MarvelService {
    private string privateKeya {get;set;}
    private string publicKeya {get;set;}

    MarvelService(){
        this.privateKeya = '';
        this.publicKeya = '';
    }

    @AuraEnabled(cacheable=true)
    public static string getToken(){
        String privateKey = '';
        String publicKey = '';
        Long ts = Datetime.now().millisecond();
        String hash = EncodingUtil.convertToHex(Crypto.generateDigest('MD5', Blob.valueOf(String.valueOf(ts) + privateKey + publicKey)));
        return 'ts=' + String.valueOf(ts) + '&apikey=' + publicKey + '&hash=' + hash;
    }

}
