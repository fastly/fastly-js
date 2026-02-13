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
import SnippetResponseAllOf from './SnippetResponseAllOf';
import Timestamps from './Timestamps';

/**
 * The SchemasSnippetResponse model module.
 * @module model/SchemasSnippetResponse
 * @version 15.0.0-beta.3
 */
class SchemasSnippetResponse {
    /**
     * Constructs a new <code>SchemasSnippetResponse</code>.
     * @alias module:model/SchemasSnippetResponse
     * @implements module:model/Snippet
     * @implements module:model/Timestamps
     * @implements module:model/SnippetResponseAllOf
     */
    constructor() { 
        Snippet.initialize(this);Timestamps.initialize(this);SnippetResponseAllOf.initialize(this);
        SchemasSnippetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemasSnippetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasSnippetResponse} obj Optional instance to populate.
     * @return {module:model/SchemasSnippetResponse} The populated <code>SchemasSnippetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemasSnippetResponse();
            Snippet.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            SnippetResponseAllOf.constructFromObject(data, obj);

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
SchemasSnippetResponse.prototype['name'] = undefined;

/**
 * The location in generated VCL where the snippet should be placed.
 * @member {module:model/SchemasSnippetResponse.TypeEnum} type
 */
SchemasSnippetResponse.prototype['type'] = undefined;

/**
 * The VCL code that specifies exactly what the snippet does.
 * @member {String} content
 */
SchemasSnippetResponse.prototype['content'] = undefined;

/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {String} priority
 * @default '100'
 */
SchemasSnippetResponse.prototype['priority'] = '100';

/**
 * Sets the snippet version.
 * @member {module:model/SchemasSnippetResponse.DynamicEnum} dynamic
 */
SchemasSnippetResponse.prototype['dynamic'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
SchemasSnippetResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
SchemasSnippetResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
SchemasSnippetResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
SchemasSnippetResponse.prototype['service_id'] = undefined;

/**
 * String representing the number identifying a version of the service.
 * @member {String} version
 */
SchemasSnippetResponse.prototype['version'] = undefined;

/**
 * @member {String} id
 */
SchemasSnippetResponse.prototype['id'] = undefined;


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
// Implement SnippetResponseAllOf interface:
/**
 * @member {String} service_id
 */
SnippetResponseAllOf.prototype['service_id'] = undefined;
/**
 * String representing the number identifying a version of the service.
 * @member {String} version
 */
SnippetResponseAllOf.prototype['version'] = undefined;
/**
 * @member {String} id
 */
SnippetResponseAllOf.prototype['id'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
SchemasSnippetResponse['TypeEnum'] = {

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
SchemasSnippetResponse['DynamicEnum'] = {

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



export default SchemasSnippetResponse;

