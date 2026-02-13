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
import Offer from './Offer';

/**
 * The StatusAllOf model module.
 * @module model/StatusAllOf
 * @version 15.0.0-beta.1
 */
class StatusAllOf {
    /**
     * Constructs a new <code>StatusAllOf</code>.
     * @alias module:model/StatusAllOf
     */
    constructor() { 
        
        StatusAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StatusAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatusAllOf} obj Optional instance to populate.
     * @return {module:model/StatusAllOf} The populated <code>StatusAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatusAllOf();

            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('zone')) {
                obj['zone'] = ApiClient.convertToType(data['zone'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], 'String');
            }
            if (data.hasOwnProperty('offers')) {
                obj['offers'] = ApiClient.convertToType(data['offers'], [Offer]);
            }
        }
        return obj;
    }


}

/**
 * The scope provided in the status request.
 * @member {String} scope
 */
StatusAllOf.prototype['scope'] = undefined;

/**
 * The domain provided in the status request.
 * @member {String} domain
 */
StatusAllOf.prototype['domain'] = undefined;

/**
 * The zone of the domain provided of the status request.
 * @member {String} zone
 */
StatusAllOf.prototype['zone'] = undefined;

/**
 * A space-delimited string of the varying statuses associated with the domain provided.
 * @member {String} status
 */
StatusAllOf.prototype['status'] = undefined;

/**
 * A space-delimited string of the varying tags associated with the domain provided.
 * @member {String} tags
 */
StatusAllOf.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/Offer>} offers
 */
StatusAllOf.prototype['offers'] = undefined;






export default StatusAllOf;

