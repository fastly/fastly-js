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
import RelationshipsForTlsBulkCertificate from './RelationshipsForTlsBulkCertificate';
import TlsBulkCertificateData from './TlsBulkCertificateData';
import TlsBulkCertificateResponseAttributes from './TlsBulkCertificateResponseAttributes';
import TlsBulkCertificateResponseDataAllOf from './TlsBulkCertificateResponseDataAllOf';
import TypeTlsBulkCertificate from './TypeTlsBulkCertificate';

/**
 * The TlsBulkCertificateResponseData model module.
 * @module model/TlsBulkCertificateResponseData
 * @version 7.10.0
 */
class TlsBulkCertificateResponseData {
    /**
     * Constructs a new <code>TlsBulkCertificateResponseData</code>.
     * @alias module:model/TlsBulkCertificateResponseData
     * @implements module:model/TlsBulkCertificateData
     * @implements module:model/TlsBulkCertificateResponseDataAllOf
     */
    constructor() { 
        TlsBulkCertificateData.initialize(this);TlsBulkCertificateResponseDataAllOf.initialize(this);
        TlsBulkCertificateResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsBulkCertificateResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsBulkCertificateResponseData} obj Optional instance to populate.
     * @return {module:model/TlsBulkCertificateResponseData} The populated <code>TlsBulkCertificateResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsBulkCertificateResponseData();
            TlsBulkCertificateData.constructFromObject(data, obj);
            TlsBulkCertificateResponseDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeTlsBulkCertificate.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = TlsBulkCertificateResponseAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForTlsBulkCertificate.constructFromObject(data['relationships']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeTlsBulkCertificate} type
 */
TlsBulkCertificateResponseData.prototype['type'] = undefined;

/**
 * @member {module:model/TlsBulkCertificateResponseAttributes} attributes
 */
TlsBulkCertificateResponseData.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipsForTlsBulkCertificate} relationships
 */
TlsBulkCertificateResponseData.prototype['relationships'] = undefined;

/**
 * @member {String} id
 */
TlsBulkCertificateResponseData.prototype['id'] = undefined;


// Implement TlsBulkCertificateData interface:
/**
 * @member {module:model/TypeTlsBulkCertificate} type
 */
TlsBulkCertificateData.prototype['type'] = undefined;
/**
 * @member {module:model/TlsBulkCertificateDataAttributes} attributes
 */
TlsBulkCertificateData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsBulkCertificate} relationships
 */
TlsBulkCertificateData.prototype['relationships'] = undefined;
// Implement TlsBulkCertificateResponseDataAllOf interface:
/**
 * @member {String} id
 */
TlsBulkCertificateResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/TlsBulkCertificateResponseAttributes} attributes
 */
TlsBulkCertificateResponseDataAllOf.prototype['attributes'] = undefined;




export default TlsBulkCertificateResponseData;

