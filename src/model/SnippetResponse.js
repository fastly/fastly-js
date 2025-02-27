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
import Snippet from './Snippet';
import SnippetResponseCommon from './SnippetResponseCommon';

/**
 * The SnippetResponse model module.
 * @module model/SnippetResponse
 * @version 9.0.0
 */
class SnippetResponse {
    /**
     * Constructs a new <code>SnippetResponse</code>.
     * @alias module:model/SnippetResponse
     * @implements module:model/Snippet
     * @implements module:model/SnippetResponseCommon
     */
    constructor() { 
        Snippet.initialize(this);SnippetResponseCommon.initialize(this);
        SnippetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SnippetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnippetResponse} obj Optional instance to populate.
     * @return {module:model/SnippetResponse} The populated <code>SnippetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnippetResponse();
            Snippet.constructFromObject(data, obj);
            SnippetResponseCommon.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('dynamic')) {
                obj['dynamic'] = ApiClient.convertToType(data['dynamic'], 'String');
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
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name for the snippet.
 * @member {String} name
 */
SnippetResponse.prototype['name'] = undefined;

/**
 * The location in generated VCL where the snippet should be placed.
 * @member {module:model/SnippetResponse.TypeEnum} type
 */
SnippetResponse.prototype['type'] = undefined;

/**
 * The VCL code that specifies exactly what the snippet does.
 * @member {String} content
 */
SnippetResponse.prototype['content'] = undefined;

/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {String} priority
 * @default '100'
 */
SnippetResponse.prototype['priority'] = '100';

/**
 * Sets the snippet version.
 * @member {module:model/SnippetResponse.DynamicEnum} dynamic
 */
SnippetResponse.prototype['dynamic'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
SnippetResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
SnippetResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
SnippetResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
SnippetResponse.prototype['service_id'] = undefined;

/**
 * String representing the number identifying a version of the service.
 * @member {String} version
 */
SnippetResponse.prototype['version'] = undefined;

/**
 * @member {String} id
 */
SnippetResponse.prototype['id'] = undefined;


// Implement Snippet interface:
/**
 * The name for the snippet.
 * @member {String} name
 */
Snippet.prototype['name'] = undefined;
/**
 * The location in generated VCL where the snippet should be placed.
 * @member {module:model/Snippet.TypeEnum} type
 */
Snippet.prototype['type'] = undefined;
/**
 * The VCL code that specifies exactly what the snippet does.
 * @member {String} content
 */
Snippet.prototype['content'] = undefined;
/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {String} priority
 * @default '100'
 */
Snippet.prototype['priority'] = '100';
/**
 * Sets the snippet version.
 * @member {module:model/Snippet.DynamicEnum} dynamic
 */
Snippet.prototype['dynamic'] = undefined;
// Implement SnippetResponseCommon interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
SnippetResponseCommon.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
SnippetResponseCommon.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
SnippetResponseCommon.prototype['updated_at'] = undefined;
/**
 * @member {String} service_id
 */
SnippetResponseCommon.prototype['service_id'] = undefined;
/**
 * String representing the number identifying a version of the service.
 * @member {String} version
 */
SnippetResponseCommon.prototype['version'] = undefined;
/**
 * @member {String} id
 */
SnippetResponseCommon.prototype['id'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
SnippetResponse['TypeEnum'] = {

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


/**
 * Allowed values for the <code>dynamic</code> property.
 * @enum {String}
 * @readonly
 */
SnippetResponse['DynamicEnum'] = {

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



export default SnippetResponse;

