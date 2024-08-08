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
 * The ApexRedirectAllOf model module.
 * @module model/ApexRedirectAllOf
 * @version 7.7.0
 */
class ApexRedirectAllOf {
    /**
     * Constructs a new <code>ApexRedirectAllOf</code>.
     * @alias module:model/ApexRedirectAllOf
     */
    constructor() { 
        
        ApexRedirectAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApexRedirectAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApexRedirectAllOf} obj Optional instance to populate.
     * @return {module:model/ApexRedirectAllOf} The populated <code>ApexRedirectAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApexRedirectAllOf();

            if (data.hasOwnProperty('status_code')) {
                obj['status_code'] = ApiClient.convertToType(data['status_code'], 'Number');
            }
            if (data.hasOwnProperty('domains')) {
                obj['domains'] = ApiClient.convertToType(data['domains'], ['String']);
            }
            if (data.hasOwnProperty('feature_revision')) {
                obj['feature_revision'] = ApiClient.convertToType(data['feature_revision'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * HTTP status code used to redirect the client.
 * @member {module:model/ApexRedirectAllOf.StatusCodeEnum} status_code
 */
ApexRedirectAllOf.prototype['status_code'] = undefined;

/**
 * Array of apex domains that should redirect to their WWW subdomain.
 * @member {Array.<String>} domains
 */
ApexRedirectAllOf.prototype['domains'] = undefined;

/**
 * Revision number of the apex redirect feature implementation. Defaults to the most recent revision.
 * @member {Number} feature_revision
 */
ApexRedirectAllOf.prototype['feature_revision'] = undefined;





/**
 * Allowed values for the <code>status_code</code> property.
 * @enum {Number}
 * @readonly
 */
ApexRedirectAllOf['StatusCodeEnum'] = {

    /**
     * value: 301
     * @const
     */
    "301": 301,

    /**
     * value: 302
     * @const
     */
    "302": 302,

    /**
     * value: 307
     * @const
     */
    "307": 307,

    /**
     * value: 308
     * @const
     */
    "308": 308
};



export default ApexRedirectAllOf;

