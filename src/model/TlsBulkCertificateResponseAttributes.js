/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Timestamps from './Timestamps';
import TlsBulkCertificateResponseAttributesAllOf from './TlsBulkCertificateResponseAttributesAllOf';

/**
 * The TlsBulkCertificateResponseAttributes model module.
 * @module model/TlsBulkCertificateResponseAttributes
 * @version 3.0.0-beta2
 */
class TlsBulkCertificateResponseAttributes {
    /**
     * Constructs a new <code>TlsBulkCertificateResponseAttributes</code>.
     * @alias module:model/TlsBulkCertificateResponseAttributes
     * @implements module:model/Timestamps
     * @implements module:model/TlsBulkCertificateResponseAttributesAllOf
     */
    constructor() { 
        Timestamps.initialize(this);TlsBulkCertificateResponseAttributesAllOf.initialize(this);
        TlsBulkCertificateResponseAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsBulkCertificateResponseAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsBulkCertificateResponseAttributes} obj Optional instance to populate.
     * @return {module:model/TlsBulkCertificateResponseAttributes} The populated <code>TlsBulkCertificateResponseAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsBulkCertificateResponseAttributes();
            Timestamps.constructFromObject(data, obj);
            TlsBulkCertificateResponseAttributesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('not_after')) {
                obj['not_after'] = ApiClient.convertToType(data['not_after'], 'Date');
            }
            if (data.hasOwnProperty('not_before')) {
                obj['not_before'] = ApiClient.convertToType(data['not_before'], 'Date');
            }
            if (data.hasOwnProperty('replace')) {
                obj['replace'] = ApiClient.convertToType(data['replace'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
TlsBulkCertificateResponseAttributes.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
TlsBulkCertificateResponseAttributes.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
TlsBulkCertificateResponseAttributes.prototype['updated_at'] = undefined;

/**
 * Time-stamp (GMT) when the certificate will expire. Must be in the future to be used to terminate TLS traffic.
 * @member {Date} not_after
 */
TlsBulkCertificateResponseAttributes.prototype['not_after'] = undefined;

/**
 * Time-stamp (GMT) when the certificate will become valid. Must be in the past to be used to terminate TLS traffic.
 * @member {Date} not_before
 */
TlsBulkCertificateResponseAttributes.prototype['not_before'] = undefined;

/**
 * A recommendation from Fastly indicating the key associated with this certificate is in need of rotation.
 * @member {Boolean} replace
 */
TlsBulkCertificateResponseAttributes.prototype['replace'] = undefined;


// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement TlsBulkCertificateResponseAttributesAllOf interface:
/**
 * Time-stamp (GMT) when the certificate will expire. Must be in the future to be used to terminate TLS traffic.
 * @member {Date} not_after
 */
TlsBulkCertificateResponseAttributesAllOf.prototype['not_after'] = undefined;
/**
 * Time-stamp (GMT) when the certificate will become valid. Must be in the past to be used to terminate TLS traffic.
 * @member {Date} not_before
 */
TlsBulkCertificateResponseAttributesAllOf.prototype['not_before'] = undefined;
/**
 * A recommendation from Fastly indicating the key associated with this certificate is in need of rotation.
 * @member {Boolean} replace
 */
TlsBulkCertificateResponseAttributesAllOf.prototype['replace'] = undefined;




export default TlsBulkCertificateResponseAttributes;

