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
 * The SnippetAllOf model module.
 * @module model/SnippetAllOf
 * @version 7.3.0
 */
class SnippetAllOf {
    /**
     * Constructs a new <code>SnippetAllOf</code>.
     * @alias module:model/SnippetAllOf
     */
    constructor() { 
        
        SnippetAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SnippetAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnippetAllOf} obj Optional instance to populate.
     * @return {module:model/SnippetAllOf} The populated <code>SnippetAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnippetAllOf();

            if (data.hasOwnProperty('dynamic')) {
                obj['dynamic'] = ApiClient.convertToType(data['dynamic'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Sets the snippet version.
 * @member {module:model/SnippetAllOf.DynamicEnum} dynamic
 */
SnippetAllOf.prototype['dynamic'] = undefined;





/**
 * Allowed values for the <code>dynamic</code> property.
 * @enum {String}
 * @readonly
 */
SnippetAllOf['DynamicEnum'] = {

    /**
     * value: "0"
     * @const
     */
    "regular": "0",

    /**
     * value: "1"
     * @const
     */
    "dynamic": "1"
};



export default SnippetAllOf;

