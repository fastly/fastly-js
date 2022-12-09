/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RelationshipTlsDomains from './RelationshipTlsDomains';
import TlsCertificateDataAttributes from './TlsCertificateDataAttributes';
import TypeTlsCertificate from './TypeTlsCertificate';

/**
 * The TlsCertificateData model module.
 * @module model/TlsCertificateData
 * @version 3.0.0
 */
class TlsCertificateData {
    /**
     * Constructs a new <code>TlsCertificateData</code>.
     * @alias module:model/TlsCertificateData
     */
    constructor() { 
        
        TlsCertificateData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsCertificateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCertificateData} obj Optional instance to populate.
     * @return {module:model/TlsCertificateData} The populated <code>TlsCertificateData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsCertificateData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeTlsCertificate.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = TlsCertificateDataAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipTlsDomains.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeTlsCertificate} type
 */
TlsCertificateData.prototype['type'] = undefined;

/**
 * @member {module:model/TlsCertificateDataAttributes} attributes
 */
TlsCertificateData.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipTlsDomains} relationships
 */
TlsCertificateData.prototype['relationships'] = undefined;






export default TlsCertificateData;

