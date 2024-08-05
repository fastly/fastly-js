/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TlsDnsRecord model module.
 * @module model/TlsDnsRecord
 * @version 7.6.0
 */
class TlsDnsRecord {
    /**
     * Constructs a new <code>TlsDnsRecord</code>.
     * @alias module:model/TlsDnsRecord
     */
    constructor() { 
        
        TlsDnsRecord.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsDnsRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsDnsRecord} obj Optional instance to populate.
     * @return {module:model/TlsDnsRecord} The populated <code>TlsDnsRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsDnsRecord();

            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('record_type')) {
                obj['record_type'] = ApiClient.convertToType(data['record_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the regions that will be used to route traffic. Select DNS records with a `global` region to route traffic to the most performant point of presence (POP) worldwide (global pricing will apply). Select DNS records with a `na/eu` region to exclusively land traffic on North American and European POPs.
 * @member {module:model/TlsDnsRecord.RegionEnum} region
 */
TlsDnsRecord.prototype['region'] = undefined;

/**
 * The type of the DNS record. `A` specifies an IPv4 address to be used for an A record to be used for apex domains (e.g., `example.com`). `AAAA` specifies an IPv6 address for use in an A record for apex domains. `CNAME` specifies the hostname to be used for a CNAME record for subdomains or wildcard domains (e.g., `www.example.com` or `*.example.com`).
 * @member {module:model/TlsDnsRecord.RecordTypeEnum} record_type
 */
TlsDnsRecord.prototype['record_type'] = undefined;





/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
TlsDnsRecord['RegionEnum'] = {

    /**
     * value: "custom"
     * @const
     */
    "custom": "custom",

    /**
     * value: "global"
     * @const
     */
    "global": "global",

    /**
     * value: "na/eu"
     * @const
     */
    "na/eu": "na/eu"
};


/**
 * Allowed values for the <code>record_type</code> property.
 * @enum {String}
 * @readonly
 */
TlsDnsRecord['RecordTypeEnum'] = {

    /**
     * value: "CNAME"
     * @const
     */
    "CNAME": "CNAME",

    /**
     * value: "A"
     * @const
     */
    "A": "A",

    /**
     * value: "AAAA"
     * @const
     */
    "AAAA": "AAAA"
};



export default TlsDnsRecord;

