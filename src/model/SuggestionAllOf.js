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
 * The SuggestionAllOf model module.
 * @module model/SuggestionAllOf
 * @version 15.0.0-beta.2
 */
class SuggestionAllOf {
    /**
     * Constructs a new <code>SuggestionAllOf</code>.
     * @alias module:model/SuggestionAllOf
     */
    constructor() { 
        
        SuggestionAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SuggestionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuggestionAllOf} obj Optional instance to populate.
     * @return {module:model/SuggestionAllOf} The populated <code>SuggestionAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuggestionAllOf();

            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('subdomain')) {
                obj['subdomain'] = ApiClient.convertToType(data['subdomain'], 'String');
            }
            if (data.hasOwnProperty('zone')) {
                obj['zone'] = ApiClient.convertToType(data['zone'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The suggested domain, consisting of a subdomain and zone.
 * @member {String} domain
 */
SuggestionAllOf.prototype['domain'] = undefined;

/**
 * The subdomain of the suggested domain.
 * @member {String} subdomain
 */
SuggestionAllOf.prototype['subdomain'] = undefined;

/**
 * The zone of the suggested domain.
 * @member {String} zone
 */
SuggestionAllOf.prototype['zone'] = undefined;

/**
 * If present, the path is to be appended to the domain to complete the suggestion.
 * @member {String} path
 */
SuggestionAllOf.prototype['path'] = undefined;






export default SuggestionAllOf;

