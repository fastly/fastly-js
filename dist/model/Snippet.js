"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Snippet model module.
 * @module model/Snippet
 * @version 3.0.0-alpha1
 */
var Snippet = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Snippet</code>.
   * @alias module:model/Snippet
   */
  function Snippet() {
    _classCallCheck(this, Snippet);

    Snippet.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Snippet, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Snippet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Snippet} obj Optional instance to populate.
     * @return {module:model/Snippet} The populated <code>Snippet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Snippet();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('dynamic')) {
          obj['dynamic'] = _ApiClient["default"].convertToType(data['dynamic'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Snippet;
}();
/**
 * The name for the snippet.
 * @member {String} name
 */


Snippet.prototype['name'] = undefined;
/**
 * Sets the snippet version.
 * @member {module:model/Snippet.DynamicEnum} dynamic
 */

Snippet.prototype['dynamic'] = undefined;
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
 * Numeric string value. Priority determines execution order. Lower numbers execute first.
 * @member {String} priority
 * @default '100'
 */

Snippet.prototype['priority'] = '100';
/**
 * Allowed values for the <code>dynamic</code> property.
 * @enum {String}
 * @readonly
 */

Snippet['DynamicEnum'] = {
  /**
   * value: "0"
   * @const
   */
  "0": "0",

  /**
   * value: "1"
   * @const
   */
  "1": "1"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Snippet['TypeEnum'] = {
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
var _default = Snippet;
exports["default"] = _default;