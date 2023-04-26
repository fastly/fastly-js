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
import ApexRedirectAllOf from './ApexRedirectAllOf';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The ApexRedirect model module.
 * @module model/ApexRedirect
 * @version 3.3.1
 */
class ApexRedirect {
    /**
     * Constructs a new <code>ApexRedirect</code>.
     * @alias module:model/ApexRedirect
     * @implements module:model/ServiceIdAndVersion
     * @implements module:model/Timestamps
     * @implements module:model/ApexRedirectAllOf
     */
    constructor() { 
        ServiceIdAndVersion.initialize(this);Timestamps.initialize(this);ApexRedirectAllOf.initialize(this);
        ApexRedirect.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApexRedirect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApexRedirect} obj Optional instance to populate.
     * @return {module:model/ApexRedirect} The populated <code>ApexRedirect</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApexRedirect();
            ServiceIdAndVersion.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ApexRedirectAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
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
 * @member {String} service_id
 */
ApexRedirect.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
ApexRedirect.prototype['version'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
ApexRedirect.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
ApexRedirect.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
ApexRedirect.prototype['updated_at'] = undefined;

/**
 * HTTP status code used to redirect the client.
 * @member {module:model/ApexRedirect.StatusCodeEnum} status_code
 */
ApexRedirect.prototype['status_code'] = undefined;

/**
 * Array of apex domains that should redirect to their WWW subdomain.
 * @member {Array.<String>} domains
 */
ApexRedirect.prototype['domains'] = undefined;

/**
 * Revision number of the apex redirect feature implementation. Defaults to the most recent revision.
 * @member {Number} feature_revision
 */
ApexRedirect.prototype['feature_revision'] = undefined;


// Implement ServiceIdAndVersion interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;
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
// Implement ApexRedirectAllOf interface:
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
ApexRedirect['StatusCodeEnum'] = {

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



export default ApexRedirect;

