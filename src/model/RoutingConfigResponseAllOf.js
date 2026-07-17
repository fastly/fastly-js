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
import RoutingConfigState from './RoutingConfigState';

/**
 * The RoutingConfigResponseAllOf model module.
 * @module model/RoutingConfigResponseAllOf
 * @version 16.0.0
 */
class RoutingConfigResponseAllOf {
    /**
     * Constructs a new <code>RoutingConfigResponseAllOf</code>.
     * @alias module:model/RoutingConfigResponseAllOf
     */
    constructor() { 
        
        RoutingConfigResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoutingConfigResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoutingConfigResponseAllOf} obj Optional instance to populate.
     * @return {module:model/RoutingConfigResponseAllOf} The populated <code>RoutingConfigResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoutingConfigResponseAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = RoutingConfigState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('activated_at')) {
                obj['activated_at'] = ApiClient.convertToType(data['activated_at'], 'Date');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * Alphanumeric string identifying the routing config.
 * @member {String} id
 */
RoutingConfigResponseAllOf.prototype['id'] = undefined;

/**
 * The user-defined name for the routing config.
 * @member {String} name
 */
RoutingConfigResponseAllOf.prototype['name'] = undefined;

/**
 * @member {module:model/RoutingConfigState} state
 */
RoutingConfigResponseAllOf.prototype['state'] = undefined;

/**
 * Timestamp of when the version was most recently activated. `null` if the version has never been activated.
 * @member {Date} activated_at
 */
RoutingConfigResponseAllOf.prototype['activated_at'] = undefined;

/**
 * HATEOAS links to related resources.
 * @member {Object.<String, String>} links
 */
RoutingConfigResponseAllOf.prototype['links'] = undefined;






export default RoutingConfigResponseAllOf;

