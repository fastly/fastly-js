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
 * The Vcl model module.
 * @module model/Vcl
 * @version 3.0.0-alpha1
 */
var Vcl = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Vcl</code>.
   * @alias module:model/Vcl
   */
  function Vcl() {
    _classCallCheck(this, Vcl);

    Vcl.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Vcl, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Vcl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Vcl} obj Optional instance to populate.
     * @return {module:model/Vcl} The populated <code>Vcl</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Vcl();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('main')) {
          obj['main'] = _ApiClient["default"].convertToType(data['main'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Vcl;
}();
/**
 * The VCL code to be included.
 * @member {String} content
 */


Vcl.prototype['content'] = undefined;
/**
 * Set to `true` when this is the main VCL, otherwise `false`.
 * @member {Boolean} main
 */

Vcl.prototype['main'] = undefined;
/**
 * The name of this VCL.
 * @member {String} name
 */

Vcl.prototype['name'] = undefined;
var _default = Vcl;
exports["default"] = _default;