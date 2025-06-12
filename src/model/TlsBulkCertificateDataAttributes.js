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
 * The TlsBulkCertificateDataAttributes model module.
 * @module model/TlsBulkCertificateDataAttributes
 * @version 12.0.0
 */
class TlsBulkCertificateDataAttributes {
    /**
     * Constructs a new <code>TlsBulkCertificateDataAttributes</code>.
     * @alias module:model/TlsBulkCertificateDataAttributes
     */
    constructor() { 
        
        TlsBulkCertificateDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsBulkCertificateDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsBulkCertificateDataAttributes} obj Optional instance to populate.
     * @return {module:model/TlsBulkCertificateDataAttributes} The populated <code>TlsBulkCertificateDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsBulkCertificateDataAttributes();

            if (data.hasOwnProperty('allow_untrusted_root')) {
                obj['allow_untrusted_root'] = ApiClient.convertToType(data['allow_untrusted_root'], 'Boolean');
            }
            if (data.hasOwnProperty('cert_blob')) {
                obj['cert_blob'] = ApiClient.convertToType(data['cert_blob'], 'String');
            }
            if (data.hasOwnProperty('intermediates_blob')) {
                obj['intermediates_blob'] = ApiClient.convertToType(data['intermediates_blob'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Allow certificates that chain to untrusted roots.
 * @member {Boolean} allow_untrusted_root
 * @default false
 */
TlsBulkCertificateDataAttributes.prototype['allow_untrusted_root'] = false;

/**
 * The PEM-formatted certificate blob. Required.
 * @member {String} cert_blob
 */
TlsBulkCertificateDataAttributes.prototype['cert_blob'] = undefined;

/**
 * The PEM-formatted chain of intermediate blobs. Required.
 * @member {String} intermediates_blob
 */
TlsBulkCertificateDataAttributes.prototype['intermediates_blob'] = undefined;






export default TlsBulkCertificateDataAttributes;

