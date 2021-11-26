/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RelationshipTlsDomains from './RelationshipTlsDomains';
import Timestamps from './Timestamps';
import TlsCertificateData from './TlsCertificateData';
import TlsCertificateResponseDataAllOf from './TlsCertificateResponseDataAllOf';
import TypeTlsCertificate from './TypeTlsCertificate';

/**
 * The TlsCertificateResponseData model module.
 * @module model/TlsCertificateResponseData
 * @version 3.0.0-alpha1
 */
class TlsCertificateResponseData {
    /**
     * Constructs a new <code>TlsCertificateResponseData</code>.
     * @alias module:model/TlsCertificateResponseData
     * @implements module:model/TlsCertificateData
     * @implements module:model/TlsCertificateResponseDataAllOf
     */
    constructor() { 
        TlsCertificateData.initialize(this);TlsCertificateResponseDataAllOf.initialize(this);
        TlsCertificateResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsCertificateResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCertificateResponseData} obj Optional instance to populate.
     * @return {module:model/TlsCertificateResponseData} The populated <code>TlsCertificateResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsCertificateResponseData();
            TlsCertificateData.constructFromObject(data, obj);
            TlsCertificateResponseDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeTlsCertificate.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Timestamps);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipTlsDomains.constructFromObject(data['relationships']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeTlsCertificate} type
 */
TlsCertificateResponseData.prototype['type'] = undefined;

/**
 * @member {module:model/Timestamps} attributes
 */
TlsCertificateResponseData.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipTlsDomains} relationships
 */
TlsCertificateResponseData.prototype['relationships'] = undefined;

/**
 * Alphanumeric string identifying a TLS certificate.
 * @member {String} id
 */
TlsCertificateResponseData.prototype['id'] = undefined;


// Implement TlsCertificateData interface:
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
// Implement TlsCertificateResponseDataAllOf interface:
/**
 * Alphanumeric string identifying a TLS certificate.
 * @member {String} id
 */
TlsCertificateResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */
TlsCertificateResponseDataAllOf.prototype['attributes'] = undefined;




export default TlsCertificateResponseData;
