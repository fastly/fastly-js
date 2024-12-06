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
 * The SnippetCommon model module.
 * @module model/SnippetCommon
 * @version 8.0.0
 */
class SnippetCommon {
    /**
     * Constructs a new <code>SnippetCommon</code>.
     * @alias module:model/SnippetCommon
     */
    constructor() { 
        
        SnippetCommon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SnippetCommon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnippetCommon} obj Optional instance to populate.
     * @return {module:model/SnippetCommon} The populated <code>SnippetCommon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnippetCommon();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name for the snippet.
 * @member {String} name
 */
SnippetCommon.prototype['name'] = undefined;

/**
 * The location in generated VCL where the snippet should be placed.
 * @member {module:model/SnippetCommon.TypeEnum} type
 */
SnippetCommon.prototype['type'] = undefined;

/**
 * The VCL code that specifies exactly what the snippet does.
 * @member {String} content
 */
SnippetCommon.prototype['content'] = undefined;

/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {String} priority
 * @default '100'
 */
SnippetCommon.prototype['priority'] = '100';





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
SnippetCommon['TypeEnum'] = {

    /**
     * value: "init"
     * @const
     */
    "init": "init",

    /**
     * value: "recv"
     * @const
     */
    "recv": "recv",

    /**
     * value: "hash"
     * @const
     */
    "hash": "hash",

    /**
     * value: "hit"
     * @const
     */
    "hit": "hit",

    /**
     * value: "miss"
     * @const
     */
    "miss": "miss",

    /**
     * value: "pass"
     * @const
     */
    "pass": "pass",

    /**
     * value: "fetch"
     * @const
     */
    "fetch": "fetch",

    /**
     * value: "error"
     * @const
     */
    "error": "error",

    /**
     * value: "deliver"
     * @const
     */
    "deliver": "deliver",

    /**
     * value: "log"
     * @const
     */
    "log": "log",

    /**
     * value: "none"
     * @const
     */
    "none": "none"
};



export default SnippetCommon;

